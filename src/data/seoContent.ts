export interface RepairServicePage {
  slug: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  intro: string;
  issues: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedGuideSlugs: string[];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface RepairGuide {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  published: string;
  modified: string;
  readTime: string;
  sections: GuideSection[];
  relatedServiceSlugs: string[];
}

export const repairServicePages: RepairServicePage[] = [
  {
    slug: "iphone-fix-dubai",
    name: "iPhone Fix",
    title: "iPhone Fix in Dubai",
    description:
      "iPhone screen, battery, charging and fault diagnosis in Dubai. Visit Azan Mobile Fix in Bur Dubai or ask about a doorstep appointment.",
    summary: "Screen, battery, charging and diagnostic support for a wide range of iPhone models.",
    intro:
      "A cracked display, weak battery or unreliable charging port can quickly interrupt work and daily communication. Our Bur Dubai team assesses the device first, explains the available repair option and confirms the quotation before work begins.",
    issues: [
      "Cracked, unresponsive or discoloured iPhone screens",
      "Battery drain, unexpected shutdowns or charging problems",
      "Charging-port, speaker, microphone and camera faults",
      "Software symptoms that require diagnosis before fixing or replacing parts",
    ],
    process: [
      { title: "Tell us the model and fault", description: "Share the iPhone model, visible damage and when the problem started." },
      { title: "Receive an assessment", description: "We confirm inspection needs, parts availability, expected timing and a quotation." },
      { title: "Approve the fixes", description: "Work starts only after you understand and approve the proposed service." },
      { title: "Test before collection", description: "Relevant functions are checked and the applicable fix warranty is explained." },
    ],
    faqs: [
      { question: "Can you fix an iPhone screen in Dubai?", answer: "We handle screen-related inquiries for a wide range of iPhone models. Timing and parts availability are confirmed after the exact model and damage are checked." },
      { question: "Do you replace iPhone batteries?", answer: "Battery service is available for supported models. We first check the symptoms because rapid battery drain can also be caused by software, charging accessories or another hardware fault." },
      { question: "Is doorstep iPhone fix available?", answer: "Doorstep appointments may be available across Dubai depending on the model, fix type, technician schedule and required equipment. Some fixes must be completed at the shop." },
    ],
    relatedGuideSlugs: ["iphone-battery-replacement-signs", "what-to-do-after-phone-screen-cracks"],
  },
  {
    slug: "samsung-phone-fix-dubai",
    name: "Samsung Phone Fix",
    title: "Samsung Phone Fix in Dubai",
    description:
      "Samsung Galaxy screen, battery, charging and camera fix inquiries in Dubai. Get an assessment from our mobile repair shop in Bur Dubai.",
    summary: "Fix assessment for Samsung Galaxy screens, batteries, charging ports, cameras and common faults.",
    intro:
      "Samsung Galaxy devices vary by model and region, so the correct model number matters when checking parts and repair options. Send us the model and symptoms, or visit the shop for an inspection and clear quotation.",
    issues: [
      "Cracked glass, display lines, black screens or touch faults",
      "Battery drain, swelling symptoms or unexpected shutdowns",
      "USB charging, microphone, speaker and camera problems",
      "Device faults that need inspection before parts are ordered",
    ],
    process: [
      { title: "Confirm the Galaxy model", description: "Share the model name or model number so compatible options can be checked." },
      { title: "Describe the symptoms", description: "Tell us what works, what fails and whether the phone was dropped or exposed to liquid." },
      { title: "Review the quotation", description: "Parts, timing and warranty terms are confirmed before you approve the repair." },
      { title: "Functional testing", description: "The repaired function is checked before the device is returned." },
    ],
    faqs: [
      { question: "Which Samsung phones can you assess?", answer: "We accept inquiries for many Samsung Galaxy models. Availability depends on the exact model, fault and compatible parts, which we confirm before booking." },
      { question: "Can a Samsung phone with display lines be repaired?", answer: "Display lines can follow impact or internal display failure. An inspection is needed to distinguish a screen fault from connector or board damage." },
      { question: "Can I ask for a quote on WhatsApp?", answer: "Yes. Send the model, a short description and clear photos of visible damage. A final quotation may still require physical inspection." },
    ],
    relatedGuideSlugs: ["what-to-do-after-phone-screen-cracks", "phone-not-charging-causes"],
  },
  {
    slug: "mobile-phone-fix-bur-dubai",
    name: "Mobile Phone Fix",
    title: "Mobile Phone Fix Shop in Bur Dubai",
    description:
      "Looking for a mobile fix shop near you in Bur Dubai? Visit Azan Mobile Fix in Meena Bazaar for phone diagnostics and fix inquiries.",
    summary: "A local Meena Bazaar fix shop for iPhone, Samsung and other smartphone fix inquiries.",
    intro:
      "If you are searching for a mobile fix shop near you in Bur Dubai, our single shop is on 25C Street in Meena Bazaar, close to Astoria Hotel. We assess common smartphone faults and explain parts, timing and warranty terms before fix work begins.",
    issues: [
      "Broken or unresponsive smartphone screens",
      "Battery, charging-port and power faults",
      "Camera, speaker and microphone problems",
      "iPhone, Samsung, Google, OnePlus and other Android inquiries",
    ],
    process: [
      { title: "Visit or message the shop", description: "Bring the device to Meena Bazaar or send the model and fault through WhatsApp." },
      { title: "Device inspection", description: "We examine the reported problem and identify whether further diagnosis is required." },
      { title: "Clear approval", description: "You receive the fix option, quotation, expected timing and warranty information." },
      { title: "Fixing and testing", description: "Approved work is completed and the relevant device functions are checked." },
    ],
    faqs: [
      { question: "Where is your mobile fix shop in Bur Dubai?", answer: "Azan Mobile Fix is on 25C Street in Meena Bazaar, Bur Dubai, near Astoria Hotel and Mini Panjab Restaurant." },
      { question: "Do I need an appointment?", answer: "You may visit during opening hours, but messaging first helps us check technician and parts availability for your model." },
      { question: "Do you have other Dubai branches?", answer: "No. We currently operate one customer-facing shop in Meena Bazaar, Bur Dubai." },
    ],
    relatedGuideSlugs: ["choose-mobile-fix-shop-dubai", "what-to-do-after-phone-screen-cracks"],
  },
  {
    slug: "ipad-tablet-fix-dubai",
    name: "iPad & Tablet Fix",
    title: "iPad and Tablet Fix in Dubai",
    description:
      "iPad and Android tablet screen, charging and battery fix inquiries in Dubai. Ask Azan Mobile Fix about assessment and availability.",
    summary: "Screen, charging, battery and fault assessment for iPads and Android tablets.",
    intro:
      "Tablet construction and parts differ significantly between models. We confirm the exact model, inspect the fault and explain whether the device can be serviced before asking you to approve any work.",
    issues: [
      "Cracked tablet glass or damaged displays",
      "Charging-port and power problems",
      "Battery drain or unexpected shutdowns",
      "Touch, button, speaker and camera faults",
    ],
    process: [
      { title: "Identify the tablet", description: "Share the model number from the device settings or rear casing." },
      { title: "Inspect the damage", description: "Screen and charging faults may require an in-shop assessment." },
      { title: "Confirm availability", description: "We explain compatible parts, estimated timing, price and warranty terms." },
      { title: "Approve and test", description: "The service proceeds after approval and relevant functions are tested afterward." },
    ],
    faqs: [
      { question: "Can you assess a cracked iPad screen?", answer: "Yes. The exact iPad model and whether the image and touch still work help determine the appropriate assessment." },
      { question: "Do tablet fixes require a shop visit?", answer: "Many tablet fixes are best completed at the shop because they require controlled heating, tools and testing. Contact us first to confirm." },
      { question: "How long does a tablet fix take?", answer: "Timing depends on diagnosis, model, parts availability and fix complexity. We provide an estimate before work begins." },
    ],
    relatedGuideSlugs: ["phone-not-charging-causes", "choose-mobile-fix-shop-dubai"],
  },
  {
    slug: "macbook-laptop-fix-dubai",
    name: "MacBook & Laptop Fix",
    title: "MacBook and Laptop Fix in Dubai",
    description:
      "MacBook and Windows laptop diagnostics in Dubai for charging, keyboard, storage and other hardware faults. Visit our Bur Dubai shop.",
    summary: "Diagnostic and fix inquiries for MacBook and Windows laptop hardware faults.",
    intro:
      "Laptop symptoms can have several causes, so reliable diagnosis matters before replacing parts. Our team accepts MacBook and Windows laptop inquiries and confirms the inspection process, quotation and expected timing before service.",
    issues: [
      "Laptop power, battery and charging faults",
      "Keyboard, trackpad and display problems",
      "Storage or memory upgrade inquiries for compatible devices",
      "Logic-board and internal hardware diagnosis",
    ],
    process: [
      { title: "Describe the laptop fault", description: "Share the brand, model and any warning lights, sounds or error messages." },
      { title: "Back up when possible", description: "Protect important data before service whenever the laptop remains usable." },
      { title: "Diagnosis and quotation", description: "We explain findings, fix options, timing and warranty information." },
      { title: "Approval and testing", description: "Only approved work proceeds, followed by checks relevant to the fix." },
    ],
    faqs: [
      { question: "Do you fix both MacBook and Windows laptops?", answer: "We accept diagnostic inquiries for MacBook and many Windows laptop models. Support depends on the device, fault and parts availability." },
      { question: "Should I back up my laptop before fix?", answer: "Yes, when possible. Hardware service can involve storage or software risks, so keep a current backup and do not share account passwords unless strictly necessary." },
      { question: "Can you quote a board fix without inspection?", answer: "Board-level faults usually require physical diagnosis. We can discuss symptoms first, but a reliable quotation normally follows inspection." },
    ],
    relatedGuideSlugs: ["choose-mobile-fix-shop-dubai"],
  },
  {
    slug: "ac-fix-dubai",
    name: "AC fix",
    title: "AC Fix in Dubai",
    description:
      "AC inspection and fix support in Dubai for cooling issues, split AC cleaning, airflow problems and home or office service inquiries.",
    summary: "Split AC cooling checks, cleaning and fix support for homes and offices in Dubai.",
    intro:
      "A weak or noisy AC can make Dubai days uncomfortable quickly. Share the unit type, symptoms and location, and we confirm inspection options, expected timing and quotation details before approved service begins.",
    issues: [
      "Split AC not cooling well or blowing warm air",
      "Weak airflow, water leakage or unusual noise",
      "Filter, coil and indoor unit cleaning inquiries",
      "Home and office AC fault checks before fixing or replacing parts",
    ],
    process: [
      { title: "Share the AC symptoms", description: "Tell us the unit type, room size, cooling issue and any leakage or noise details." },
      { title: "Confirm visit options", description: "We check technician availability, location coverage, expected timing and inspection needs." },
      { title: "Review the quotation", description: "The proposed service, parts if needed and warranty terms are explained before work begins." },
      { title: "Service and test cooling", description: "Approved work is completed and airflow, drainage and cooling performance are checked." },
    ],
    faqs: [
      { question: "Do you handle split AC fix in Dubai?", answer: "Yes. We accept split AC fix and inspection inquiries for common cooling, airflow, leakage and noise problems. Final scope depends on inspection." },
      { question: "Can I book AC fix on WhatsApp?", answer: "Yes. Send the AC type, location, issue details and photos or videos if possible so we can confirm the next available option." },
      { question: "Is AC cleaning included with fix?", answer: "Cleaning may be recommended depending on the fault and unit condition. We confirm what is included before you approve the service." },
    ],
    relatedGuideSlugs: ["choose-mobile-fix-shop-dubai"],
  },
];

export const repairGuides: RepairGuide[] = [
  {
    slug: "what-to-do-after-phone-screen-cracks",
    title: "What to Do After Your Phone Screen Cracks",
    description:
      "A practical checklist for protecting your phone, data and fingers after a cracked screen, plus signs that the device needs prompt inspection.",
    excerpt: "Protect the display, check the device safely and avoid actions that can turn a small crack into a larger repair.",
    published: "2026-08-03",
    modified: "2026-08-03",
    readTime: "5 min read",
    sections: [
      {
        heading: "Check the phone without pressing the damaged area",
        paragraphs: [
          "A screen can crack while the image and touch controls still appear normal. Avoid repeatedly pressing the damaged section because loose glass can cut skin and extra pressure can harm the display beneath it.",
          "If the phone is hot, bent, swollen, producing an unusual smell or showing exposed internal parts, stop using it and keep it away from heat and flammable materials. Those symptoms need prompt professional attention.",
        ],
        bullets: ["Look for dark patches, coloured lines or flickering", "Test touch gently away from sharp glass", "Check whether the frame has bent or separated"],
      },
      {
        heading: "Protect your data while the display still works",
        paragraphs: [
          "Back up important photos, contacts and files as soon as practical. Damage can spread after another impact or as moisture enters through the crack. A current cloud or computer backup reduces the risk if the display later becomes unusable.",
          "You normally should not give a fix provider your personal passwords. Remove sensitive notifications from the lock screen and use a device fix or maintenance mode when the manufacturer offers one.",
        ],
      },
      {
        heading: "Use a temporary cover carefully",
        paragraphs: [
          "A fitted screen protector can contain small glass fragments until inspection. Do not apply liquid glue, household adhesive or excessive tape over ports and speakers. These materials can complicate disassembly and create additional cleaning work.",
          "Keep the phone dry. A cracked display reduces the protection originally provided by the enclosure, even when the model was marketed as water resistant when new.",
        ],
      },
      {
        heading: "Information to send when requesting a quote",
        paragraphs: [
          "Provide the exact phone model, whether the image and touch still work, and a clear photo taken with another device. Mention any bending, liquid exposure or previous repair. This helps a shop check likely parts, but a final quote may still require physical inspection.",
        ],
        bullets: ["Exact model or model number", "Photo of the front and damaged corner", "Touch and display condition", "Any prior repair or liquid exposure"],
      },
    ],
    relatedServiceSlugs: ["iphone-fix-dubai", "samsung-phone-fix-dubai", "mobile-phone-fix-bur-dubai"],
  },
  {
    slug: "iphone-battery-replacement-signs",
    title: "Signs Your iPhone Battery May Need Replacement",
    description:
      "Learn the common signs of iPhone battery ageing, what else can cause rapid drain and when to arrange a safe battery assessment in Dubai.",
    excerpt: "Rapid drain does not always mean the battery is faulty. Check these symptoms and settings before arranging an assessment.",
    published: "2026-08-03",
    modified: "2026-08-03",
    readTime: "6 min read",
    sections: [
      {
        heading: "Common symptoms of an ageing battery",
        paragraphs: [
          "Rechargeable batteries lose capacity as they age. You may notice that the phone reaches a low percentage much sooner, shuts down unexpectedly under load or needs charging several times each day despite similar use.",
          "Performance can also feel inconsistent when the battery cannot provide stable power. However, background activity, weak mobile signal, high screen brightness and a recent software update can temporarily increase energy use, so one symptom alone is not a complete diagnosis.",
        ],
        bullets: ["Much shorter runtime than before", "Unexpected shutdowns", "Battery percentage changing unusually", "Service or battery-health warning in settings"],
      },
      {
        heading: "Check usage before deciding",
        paragraphs: [
          "Review battery usage in Settings to identify apps using an unusual share of power. Restart the phone, install stable software updates and observe it over a normal day. If drain began immediately after an update, background indexing may settle after some time.",
          "Also test with a known-good charging cable and adapter that meet the device requirements. A damaged accessory or dirty charging port can create charging symptoms that resemble a weak battery.",
        ],
      },
      {
        heading: "Treat swelling as urgent",
        paragraphs: [
          "Stop charging or pressing on the phone if the display is lifting, the enclosure is separating or the device appears swollen. Do not puncture, bend or attempt to remove a swollen battery yourself. Keep it away from heat and arrange professional handling.",
        ],
      },
      {
        heading: "What to ask before replacement",
        paragraphs: [
          "Confirm the battery option, total quotation, expected timing and applicable warranty before approving service. Back up important data where possible and ask how the device will be tested after replacement.",
        ],
        bullets: ["Is diagnosis included?", "What battery option is available for this model?", "What warranty applies to the service?", "Will charging and power functions be tested?"],
      },
    ],
    relatedServiceSlugs: ["iphone-fix-dubai"],
  },
  {
    slug: "phone-not-charging-causes",
    title: "Why Is My Phone Not Charging? Safe Checks to Try",
    description:
      "Safe checks for a phone that will not charge, including cables, adapters, ports, moisture warnings and signs that require fix diagnosis.",
    excerpt: "Test the easy causes first and know when to stop troubleshooting a charging problem at home.",
    published: "2026-08-03",
    modified: "2026-08-03",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start with the cable, adapter and power outlet",
        paragraphs: [
          "Try a compatible cable and adapter that are known to work, then test a different wall outlet. Inspect accessories for bent connectors, exposed wires, overheating or discolouration. Stop using damaged charging accessories rather than moving them between devices.",
          "Some low-power USB ports charge slowly or not at all when a phone is deeply discharged. Leave the device connected to a suitable wall adapter for a short period before checking it again.",
        ],
      },
      {
        heading: "Inspect the port without using metal tools",
        paragraphs: [
          "Pocket lint can prevent a connector from seating correctly. Turn the phone off and look into the port under good light. Do not insert pins, needles or liquid cleaners; metal tools can damage contacts or cause a short circuit.",
          "If the port looks damaged, loose or burnt, arrange an inspection. Repeatedly forcing the cable at an angle can increase the damage.",
        ],
      },
      {
        heading: "Respect moisture and temperature warnings",
        paragraphs: [
          "Disconnect the cable if the phone reports moisture in the connector. Allow the device to dry naturally in a ventilated place and follow the manufacturer guidance for that model. Do not use direct heat, compressed air or rice, which can introduce particles without fixing internal moisture.",
          "Charging may also pause when a device is too hot or cold. Let it return to a normal indoor temperature before trying again.",
        ],
      },
      {
        heading: "When diagnosis is the better next step",
        paragraphs: [
          "A phone that charges only at a certain angle, restarts while connected, becomes unusually hot or remains unresponsive with known-good accessories may have a port, battery or board-level fault. A technician can test the charging path before recommending a part.",
        ],
        bullets: ["Charging works only when the cable is moved", "The connector feels loose", "The phone overheats or smells unusual", "Multiple compatible chargers fail"],
      },
    ],
    relatedServiceSlugs: ["iphone-fix-dubai", "samsung-phone-fix-dubai", "ipad-tablet-fix-dubai"],
  },
  {
    slug: "choose-mobile-fix-shop-dubai",
    title: "How to Choose a Mobile Fix Shop in Dubai",
    description:
      "A practical checklist for comparing mobile fix shops in Dubai: business identity, diagnosis, quotation, parts, privacy and warranty.",
    excerpt: "Use clear questions about diagnosis, parts, data privacy and warranty before handing over your phone.",
    published: "2026-08-03",
    modified: "2026-08-03",
    readTime: "7 min read",
    sections: [
      {
        heading: "Choose a business you can identify and revisit",
        paragraphs: [
          "A legitimate fix provider should make its business name, location and contact method easy to find. A physical address matters when a fix needs follow-up. Check that the name and address shown online are consistent with the shop you visit.",
          "Online ratings can be useful, but read the substance of recent reviews rather than relying only on an average score. Look for comments about communication, quotation changes and after-service support.",
        ],
      },
      {
        heading: "Ask for diagnosis and approval before work",
        paragraphs: [
          "A visible symptom does not always identify the failed part. Ask whether the quotation is preliminary or final, whether diagnosis carries a fee and what happens if additional damage is discovered after opening the device.",
          "Do not approve vague work. The provider should be able to describe the intended fix, expected timing and total price before proceeding, subject to any clearly explained diagnostic findings.",
        ],
      },
      {
        heading: "Clarify the part and warranty option",
        paragraphs: [
          "Words such as original, OEM and compatible can be used inconsistently. Ask exactly which part option is being offered for your model and how it may differ in display quality, battery reporting or manufacturer features.",
          "Request written warranty terms. Check the duration, the repaired component covered, exclusions for impact or liquid damage and the process for making a claim.",
        ],
        bullets: ["Exact part option", "Total price before work", "Expected completion window", "Written repair warranty and exclusions"],
      },
      {
        heading: "Protect accounts and personal data",
        paragraphs: [
          "Back up important data and remove payment cards or sensitive removable storage when practical. You generally should not need to share personal account passwords for a hardware repair. If functional testing requires device access, ask what access is needed and use a temporary method or repair mode when available.",
          "Before leaving, test the repaired function and basic features such as charging, touch, sound and cameras where relevant. Keep the receipt and warranty information.",
        ],
      },
    ],
    relatedServiceSlugs: ["mobile-phone-fix-bur-dubai", "iphone-fix-dubai", "samsung-phone-fix-dubai", "macbook-laptop-fix-dubai"],
  },
];

export function getRepairService(slug?: string) {
  return repairServicePages.find((service) => service.slug === slug);
}

export function getRepairGuide(slug?: string) {
  return repairGuides.find((guide) => guide.slug === slug);
}
