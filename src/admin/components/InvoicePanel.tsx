import { useEffect, useMemo, useState } from "react";
import { Download, Plus, Printer, Save, Trash2 } from "lucide-react";

type InvoiceItem = {
  id: number;
  description: string;
  qty: number;
  rate: number;
};

type InvoiceData = {
  invoiceNo: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deviceModel: string;
  issueSummary: string;
  date: string;
  dueDate: string;
  notes: string;
  items: InvoiceItem[];
};

const makeInvoiceNumber = () => {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");

  return `INV-${stamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
};

const createDefaultInvoice = (): InvoiceData => ({
  invoiceNo: makeInvoiceNumber(),
  customerName: "",
  customerPhone: "",
  customerEmail: "",
  deviceModel: "",
  issueSummary: "",
  date: new Date().toISOString().slice(0, 10),
  dueDate: "",
  notes: "Thank you for choosing Azan Mobile Fix. Please keep this invoice for your records.",
  items: [
    {
      id: 1,
      description: "Device inspection and repair services",
      qty: 1,
      rate: 0,
    },
  ],
});

const loadDraft = (): InvoiceData => {
  if (typeof window === "undefined") {
    return createDefaultInvoice();
  }

  try {
    const stored = window.localStorage.getItem("azan_invoice_draft");
    if (!stored) {
      return createDefaultInvoice();
    }

    const parsed = JSON.parse(stored) as Partial<InvoiceData>;

    return {
      ...createDefaultInvoice(),
      ...parsed,
      items: Array.isArray(parsed.items) && parsed.items.length > 0 ? parsed.items : createDefaultInvoice().items,
    };
  } catch {
    return createDefaultInvoice();
  }
};

export default function InvoicePanel() {
  const [invoice, setInvoice] = useState<InvoiceData>(loadDraft);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("azan_invoice_draft", JSON.stringify(invoice));
    }
  }, [invoice]);

  const subtotal = useMemo(
    () => invoice.items.reduce((sum, item) => sum + item.qty * item.rate, 0),
    [invoice.items]
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const updateField = <K extends keyof InvoiceData>(key: K, value: InvoiceData[K]) => {
    setInvoice((current) => ({ ...current, [key]: value }));
  };

  const updateItem = (id: number, key: "description" | "qty" | "rate", value: string | number) => {
    setInvoice((current) => ({
      ...current,
      items: current.items.map((item) => {
        if (item.id !== id) {
          return item;
        }

        const nextItem = { ...item };

        if (key === "description") {
          nextItem.description = String(value);
        }

        if (key === "qty") {
          nextItem.qty = Number(value) > 0 ? Number(value) : 0;
        }

        if (key === "rate") {
          nextItem.rate = Number(value) > 0 ? Number(value) : 0;
        }

        return nextItem;
      }),
    }));
  };

  const addItem = () => {
    setInvoice((current) => ({
      ...current,
      items: [
        ...current.items,
        {
          id: Date.now() + Math.random(),
          description: "",
          qty: 1,
          rate: 0,
        },
      ],
    }));
  };

  const removeItem = (id: number) => {
    setInvoice((current) => ({
      ...current,
      items: current.items.length === 1 ? current.items : current.items.filter((item) => item.id !== id),
    }));
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleSaveDraft = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("azan_invoice_draft", JSON.stringify(invoice));
      setSavedMessage("Draft saved in this browser.");
      window.setTimeout(() => setSavedMessage(""), 2200);
    }
  };

  const handleDownloadJson = () => {
    if (typeof window === "undefined") {
      return;
    }

    const blob = new Blob([JSON.stringify(invoice, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${invoice.invoiceNo || "invoice"}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setSavedMessage("Invoice draft downloaded.");
    window.setTimeout(() => setSavedMessage(""), 2200);
  };

  const handleNewInvoice = () => {
    const fresh = createDefaultInvoice();
    setInvoice(fresh);
    setSavedMessage("New invoice created.");
    window.setTimeout(() => setSavedMessage(""), 2200);
  };

  return (
    <>
      <style>{`
        @media print {
          body {
            background: #ffffff !important;
          }

          .no-print {
            display: none !important;
          }

          .invoice-paper {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>

      <div className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b7004f]">Billing</p>
            <h2 className="mt-1 text-3xl font-black text-[#2c1b2a]">Customer invoice</h2>
          </div>

          <div className="no-print flex flex-wrap gap-3">
            <button
              onClick={handleSaveDraft}
              className="inline-flex items-center gap-2 rounded-xl border border-[#f1e8f3] bg-white px-4 py-2.5 font-semibold text-[#2f1d2d] shadow-sm transition hover:border-[#b7004f]/40 hover:text-[#b7004f]"
            >
              <Save size={18} />
              Save draft
            </button>

            <button
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-2 rounded-xl border border-[#f1e8f3] bg-white px-4 py-2.5 font-semibold text-[#2f1d2d] shadow-sm transition hover:border-[#b7004f]/40 hover:text-[#b7004f]"
            >
              <Download size={18} />
              Download JSON
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl bg-[#b7004f] px-4 py-2.5 font-semibold text-white shadow-lg shadow-[#b7004f]/20 transition hover:bg-[#9c003e]"
            >
              <Printer size={18} />
              Print / Save PDF
            </button>
          </div>
        </div>

        {savedMessage && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {savedMessage}
          </div>
        )}

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#f1e8f3] bg-white p-5 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-[#5d4452]">
                Invoice number
                <input
                  value={invoice.invoiceNo}
                  onChange={(event) => updateField("invoiceNo", event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                />
              </label>

              <label className="block text-sm font-medium text-[#5d4452]">
                Date
                <input
                  type="date"
                  value={invoice.date}
                  onChange={(event) => updateField("date", event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                />
              </label>

              <label className="block text-sm font-medium text-[#5d4452]">
                Customer name
                <input
                  value={invoice.customerName}
                  onChange={(event) => updateField("customerName", event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                  placeholder="Full name"
                />
              </label>

              <label className="block text-sm font-medium text-[#5d4452]">
                Due date
                <input
                  type="date"
                  value={invoice.dueDate}
                  onChange={(event) => updateField("dueDate", event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                />
              </label>

              <label className="block text-sm font-medium text-[#5d4452]">
                Phone
                <input
                  value={invoice.customerPhone}
                  onChange={(event) => updateField("customerPhone", event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                  placeholder="+971 50 000 0000"
                />
              </label>

              <label className="block text-sm font-medium text-[#5d4452]">
                Email
                <input
                  type="email"
                  value={invoice.customerEmail}
                  onChange={(event) => updateField("customerEmail", event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                  placeholder="customer@email.com"
                />
              </label>

              <label className="block text-sm font-medium text-[#5d4452] md:col-span-2">
                Device model
                <input
                  value={invoice.deviceModel}
                  onChange={(event) => updateField("deviceModel", event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                  placeholder="iPhone 14 Pro / Samsung Galaxy S24"
                />
              </label>

              <label className="block text-sm font-medium text-[#5d4452] md:col-span-2">
                Issue summary
                <textarea
                  value={invoice.issueSummary}
                  onChange={(event) => updateField("issueSummary", event.target.value)}
                  className="mt-2 min-h-24 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 py-3 focus:border-[#b7004f] focus:outline-none"
                  placeholder="Example: Screen replacement, battery replacement, software repair."
                />
              </label>
            </div>

            <div className="mt-6 rounded-2xl border border-[#f1e8f3] bg-[#fffafc] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-[#2c1b2a]">Service / parts</h3>
                <button
                  onClick={addItem}
                  className="no-print inline-flex items-center gap-2 rounded-xl bg-[#b7004f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#9c003e]"
                >
                  <Plus size={16} />
                  Add item
                </button>
              </div>

              <div className="space-y-3">
                {invoice.items.map((item) => (
                  <div key={item.id} className="grid gap-3 rounded-2xl border border-[#f0e7ef] bg-white p-3 md:grid-cols-[1.7fr_0.5fr_0.7fr_auto]">
                    <input
                      value={item.description}
                      onChange={(event) => updateItem(item.id, "description", event.target.value)}
                      className="h-11 w-full rounded-xl border border-[#f0e7ef] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                      placeholder="Repair item description"
                    />

                    <input
                      type="number"
                      min={0}
                      value={item.qty}
                      onChange={(event) => updateItem(item.id, "qty", Number(event.target.value))}
                      className="h-11 w-full rounded-xl border border-[#f0e7ef] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                    />

                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={item.rate}
                      onChange={(event) => updateItem(item.id, "rate", Number(event.target.value))}
                      className="h-11 w-full rounded-xl border border-[#f0e7ef] bg-[#fdf7fa] px-3 focus:border-[#b7004f] focus:outline-none"
                    />

                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="no-print inline-flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition hover:border-red-200 hover:bg-red-100"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#5d4452]">
                Notes
                <textarea
                  value={invoice.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  className="mt-2 min-h-24 w-full rounded-xl border border-[#f0e8ee] bg-[#fdf7fa] px-3 py-3 focus:border-[#b7004f] focus:outline-none"
                />
              </label>
            </div>
          </div>

          <aside className="invoice-paper rounded-[28px] border border-[#f1e8f3] bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#f3edf5] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b7004f]">Azan Mobile Fix</p>
                <h3 className="mt-1 text-2xl font-black text-[#2c1b2a]">Invoice</h3>
              </div>

              <button onClick={handleNewInvoice} className="no-print rounded-xl border border-[#f1e8f3] px-3 py-2 text-sm font-medium text-[#5d4452] hover:border-[#b7004f]/40 hover:text-[#b7004f]">
                New invoice
              </button>
            </div>

            <div className="space-y-2 text-sm text-[#5d4452]">
              <p><span className="font-semibold text-[#2c1b2a]">Invoice #:</span> {invoice.invoiceNo || "—"}</p>
              <p><span className="font-semibold text-[#2c1b2a]">Date:</span> {invoice.date || "—"}</p>
              <p><span className="font-semibold text-[#2c1b2a]">Due:</span> {invoice.dueDate || "—"}</p>
            </div>

            <div className="mt-6 rounded-2xl bg-[#fff8fb] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b596b]">Bill to</p>
              <div className="mt-3 space-y-2 text-sm text-[#42313d]">
                <p className="text-lg font-bold text-[#2c1b2a]">{invoice.customerName || "Customer name"}</p>
                <p>{invoice.customerPhone || "Phone number"}</p>
                <p>{invoice.customerEmail || "customer@email.com"}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-[#42313d]">
              <div className="flex items-center justify-between text-[#2c1b2a]">
                <span className="font-semibold">Device</span>
                <span className="font-medium">{invoice.deviceModel || "Not specified"}</span>
              </div>
              <div className="rounded-2xl border border-[#f3edf5] bg-[#fdf7fa] p-3">
                <p className="font-semibold text-[#2c1b2a]">Issue summary</p>
                <p className="mt-2 leading-6">{invoice.issueSummary || "No issue summary added yet."}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {invoice.items.map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4 text-sm text-[#42313d]">
                  <div>
                    <p className="font-medium text-[#2c1b2a]">{item.description || "Service item"}</p>
                    <p className="text-[#6e5d65]">{item.qty} x AED {Number(item.rate).toFixed(2)}</p>
                  </div>
                  <p className="font-bold text-[#2c1b2a]">AED {(item.qty * item.rate).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-[#f3edf5] pt-5 text-sm text-[#42313d]">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>AED {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>VAT (5%)</span>
                <span>AED {tax.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#f3edf5] pt-3 text-lg font-black text-[#2c1b2a]">
                <span>Total</span>
                <span>AED {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-[#e8d7df] bg-[#fff8fb] p-4 text-sm leading-6 text-[#5d4452]">
              {invoice.notes}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
