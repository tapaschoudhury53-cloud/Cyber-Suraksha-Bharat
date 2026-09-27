import { ScamDetail, ScamPreset, QuizQuestion, HelplineResource, GoogleSitePageSpec } from '../types';

export const SCAMS_DATA: ScamDetail[] = [
  {
    id: 'digital-arrest',
    title: 'Digital Arrest & Law Enforcement Impersonation',
    category: 'impersonation',
    categoryLabel: 'State / Police Impersonation',
    summary: 'Fraudsters impersonate Police, CBI, ED, or Customs officers over Skype or WhatsApp video calls, staging mock police stations and threatening victims with arrest for alleged contraband parcels.',
    severity: 'Critical',
    prevalenceRating: 'Leading cause of multi-crore losses in India (2024–2026)',
    modusOperandi: [
      'Victim receives an automated call alleging an illegal parcel (containing drugs, fake passports) intercepted by FedEx or Customs.',
      'Call is transferred to a fake "Inspector" or "CBI Officer" sitting in front of a mock station backdrop with official insignia.',
      'Victim is placed under "Digital Arrest" via continuous Skype/WhatsApp video call and forbidden from disconnecting or contacting family.',
      'Fraudster demands transfer of all savings into a "Reserve Bank verification / secret supervisory account" to clear their name.'
    ],
    realScriptExample: '"This is Inspector Ramesh from Mumbai Crime Branch. An FIR has been registered under your Aadhaar card for 16 contraband parcels. You are now placed under Digital Custody. Do not disconnect this Skype call or police will reach your residence in 30 minutes. Transfer your bank balance to the government clearance escrow account immediately."',
    redFlags: [
      'Demand for continuous video surveillance ("Digital Arrest does not legally exist in Indian law").',
      'Threat of immediate arrest unless funds are transferred to an individual/dummy bank account.',
      'Official-looking letters stamped with fake Supreme Court or CBI seals sent on WhatsApp.',
      'Insistence on total secrecy from family members or bank staff.'
    ],
    legalSections: {
      itAct: 'Section 66D (Cheating by personation using computer resource)',
      bns: 'Section 319 / 318(4) of Bharatiya Nyaya Sanhita (Cheating & Extortion)'
    },
    preventativeMeasures: [
      'Know the law: Indian law enforcement agencies NEVER arrest citizens over Skype, Zoom, or WhatsApp video calls.',
      'Police officers never demand money transfers to "verify" or "clear" bank accounts.',
      'Disconnect the call immediately and call your local police station or dial 1930.',
      'Report the suspicious mobile number on the Sanchar Saathi "Chakshu" portal.'
    ],
    goldenHourAdvice: 'If money was transferred, immediately call 1930 within the first 2 hours to freeze the recipient mule account in the Citizen Financial Cyber Fraud Reporting System (CFCFRS).'
  },
  {
    id: 'upi-qr-fraud',
    title: 'UPI "Scan QR to Receive Money" Fraud',
    category: 'financial',
    categoryLabel: 'UPI & Banking',
    summary: 'Fraudsters pose as buyers on OLX, Quickr, or Facebook Marketplace, offering to send advance payment, but trick the seller into scanning a QR code or entering their UPI PIN.',
    severity: 'Critical',
    prevalenceRating: 'Accounts for over 35% of citizen UPI cyber fraud complaints',
    modusOperandi: [
      'Victim lists second-hand goods (furniture, electronics, vehicle) on classified portals.',
      'Fraudster contacts immediately, pretends to be an eager buyer or army/police personnel posted out of town.',
      'Fraudster sends a QR code or payment link, stating: "I am paying ₹15,000. Just scan this QR and enter your PIN to credit your bank account."',
      'The moment the victim enters their UPI PIN, money is debited from their account instead of credited.'
    ],
    realScriptExample: '"Sir, I am in the army cantonment so I cannot visit in person. I am sending an official merchant QR code for ₹18,000. Scan it in PhonePe/Google Pay and punch your 4-digit PIN to approve receiving the funds into your bank account."',
    redFlags: [
      'Fundamental Rule Violation: You NEVER need to enter a UPI PIN or scan a QR code to receive money.',
      'Claiming to be an army officer, CISF personnel, or CRPF officer to gain blind trust.',
      'Sending a screenshot of a "pending payment voucher" requiring authorization.',
      'Urging quick action before the "merchant token expires".'
    ],
    legalSections: {
      itAct: 'Section 66D (Cheating by impersonation)',
      bns: 'Section 318(4) BNS (Fraudulent misappropriation of property)'
    },
    preventativeMeasures: [
      'Memorize the Golden Rule: UPI PIN is ONLY needed for sending money or checking bank balance.',
      'Receiving money via UPI is 100% passive—funds credit automatically with just your mobile number or UPI ID.',
      'Never scan any QR code sent on WhatsApp for "receiving" money.',
      'Verify buyer identity in person and prefer cash-on-delivery or direct NEFT/IMPS transfers.'
    ],
    goldenHourAdvice: 'Immediately block UPI through your mobile banking app or call your bank\'s 24x7 toll-free fraud helpline to freeze your UPI ID and register a dispute.'
  },
  {
    id: 'part-time-task-telegram',
    title: 'Part-Time Task & Telegram Pretext Scam',
    category: 'employment',
    categoryLabel: 'Job & Investment',
    summary: 'Scammers offer work-from-home tasks like liking YouTube videos or rating hotels on Google Maps, lure victims with small initial payouts (₹150–₹500), and then trick them into high-stakes "pre-paid VIP tasks".',
    severity: 'High',
    prevalenceRating: 'Massively targeting college students, homemakers, and job seekers',
    modusOperandi: [
      'Victim receives an unsolicited WhatsApp message from "HR at global marketing firm".',
      'Initial task is simple: like 3 YouTube videos or review 2 hotels for ₹150 payout, which is actually paid into victim\'s UPI.',
      'Victim is then shifted to a Telegram group filled with fake bot members sharing screenshots of massive earnings.',
      'Victim is pressured into "VIP Investment Tasks" (deposit ₹10,000 to get ₹14,000).',
      'When victim attempts to withdraw, withdrawals are frozen citing "tax deposit", "system error", or "level upgrade fee".'
    ],
    realScriptExample: '"Greetings! Our media company is recruiting part-time reviewers. Earn ₹2,000 to ₹5,000 daily from home. No experience needed. Reply 1 to start your trial task on Telegram and earn ₹300 instantly."',
    redFlags: [
      'Unsolicited WhatsApp job offers from overseas country codes (+62, +84, +234, +1, etc.).',
      'Requiring you to pay money to withdraw your own earned money.',
      'Telegram channels with hundreds of members celebrating constant payouts (sockpuppet accounts).',
      'Pressure to buy cryptocurrency (USDT) on unauthorized exchanges to deposit into the platform.'
    ],
    legalSections: {
      itAct: 'Section 66D, Section 43 (Computer tampering)',
      bns: 'Section 316(2) BNS (Criminal Breach of Trust) & 318(4) BNS'
    },
    preventativeMeasures: [
      'Legitimate corporations never recruit freelance workers via random WhatsApp messages.',
      'Never pay money in advance to secure a job or task payout.',
      'Exit and report any Telegram group demanding deposits for tasks.',
      'Block and report international country-code numbers reaching out on WhatsApp.'
    ],
    goldenHourAdvice: 'Record transaction UTR numbers of the mule accounts where you sent money and immediately report to 1930 and cybercrime.gov.in.'
  },
  {
    id: 'aeps-biometric-fraud',
    title: 'AePS (Aadhaar Enabled Payment System) Biometric Cloning',
    category: 'identity',
    categoryLabel: 'Biometric & Identity',
    summary: 'Cyber criminals harvest citizens\' Aadhaar numbers and cloned fingerprint impressions from land registry deeds or government stamp records, draining bank accounts without OTPs.',
    severity: 'Critical',
    prevalenceRating: 'Targeting rural and semi-urban bank accounts without SMS awareness',
    modusOperandi: [
      'Criminals download public registry documents (sale deeds, property registrations) where thumbprints and Aadhaar numbers are displayed.',
      'Fingerprint impressions are etched onto polymer/silicon molds or glue sheets.',
      'Using micro-ATM biometric POS machines, criminal agents authenticate AePS cash withdrawals without triggering OTPs.'
    ],
    realScriptExample: '"Citizen receives unexpected SMS from bank: ₹10,000 debited via AePS terminal at 2:15 AM from an unknown BC (Business Correspondent) in a distant state."',
    redFlags: [
      'Debit alerts mentioning "AePS / BC Cash Withdrawal" without the account holder visiting any kiosk or ATM.',
      'Withdrawals occurring in round sums (₹10,000 maximum daily AePS limit).',
      'No OTP received prior to the transaction (because AePS relies solely on biometric authentication).'
    ],
    legalSections: {
      itAct: 'Section 66C (Identity theft), Section 43',
      bns: 'Section 319 BNS (Cheating by personation), Aadhaar Act Section 34'
    },
    preventativeMeasures: [
      'Mandatory Defense: Lock your Aadhaar biometrics immediately using the official mAadhaar App or uidai.gov.in portal.',
      'When biometrics are locked, NO ONE (not even you) can authenticate AePS transactions until you temporarily unlock them.',
      'Disable AePS transaction privileges through your bank branch if you do not use micro-ATM cash services.',
      'Use Masked Aadhaar (showing only the last 4 digits) for general photo ID verification.'
    ],
    goldenHourAdvice: 'Open mAadhaar app immediately, lock biometrics in 10 seconds, call bank customer care to disable AePS facility, and report fraudulent transaction on 1930.'
  },
  {
    id: 'fake-stock-trading-app',
    title: 'Fake Stock Trading Apps & WhatsApp VIP Groups',
    category: 'financial',
    categoryLabel: 'Investment & Securities',
    summary: 'Fraudsters create fake institutional WhatsApp groups impersonating prominent Indian fund managers, inviting investors to download unverified APKs offering fake "pre-IPO institutional quotas".',
    severity: 'Critical',
    prevalenceRating: 'Fastest-growing white-collar financial scam in urban India',
    modusOperandi: [
      'Victims see Facebook or Instagram ads promoting "Stock Market Masterclasses" with photos of famous market veterans.',
      'Victims are added to WhatsApp groups where admins share fabricated analysis and fake screenshots of 800% gains.',
      'Victim is instructed to download a proprietary trading app (via an APK link or unverified web app, bypassing Google Play/App Store).',
      'The app displays simulated astronomical profits on dummy stocks.',
      'When victim seeks redemption, app demands 20%–30% "GST", "SEBI clearance fee", or "advance income tax".'
    ],
    realScriptExample: '"Welcome to the Institutional Elite Wealth Club. Our SEBI-registered team has obtained exclusive foreign institutional investor (FII) quota for upcoming blockbuster IPOs. Download the AlphaTrades Institutional Terminal to receive 100% allotment."',
    redFlags: [
      'Instructions to download trading applications from direct links (.apk) rather than official app stores.',
      'Bank deposits directed to unrelated current accounts of private shell companies instead of recognized clearing corporations (ICCL / NCL).',
      'Guaranteed returns of 20%–50% weekly with "zero risk".',
      'Demanding upfront tax deposits to release withdrawal balances.'
    ],
    legalSections: {
      itAct: 'Section 66D, Section 43',
      bns: 'Section 318(4) BNS, SEBI Act 1992 (Unregistered investment advisory)'
    },
    preventativeMeasures: [
      'Verify registered brokers exclusively on the official SEBI portal (sebi.gov.in) before trading.',
      'Only trade through registered depository participants (Zerodha, Groww, AngelOne, ICICI Direct, HDFC Securities, etc.).',
      'All legitimate stock market funds must be deposited directly into SEBI-approved client accounts, NEVER private firm current accounts.',
      'Never install third-party financial APK files from WhatsApp or Telegram links.'
    ],
    goldenHourAdvice: 'Preserve all bank transaction IDs, take screenshots of the WhatsApp group and chat histories, and file an emergency complaint on 1930 and SEBI SCORES portal.'
  },
  {
    id: 'electricity-bill-apk',
    title: 'Electricity Bill Disconnect & Malicious APKs',
    category: 'impersonation',
    categoryLabel: 'Utility & Malware',
    summary: 'Mass SMS alerts threaten power disconnection by nightfall due to unpaid bills. When victims call the provided contact, they are guided to download remote-access apps or malicious SMS-forwarder APKs.',
    severity: 'High',
    prevalenceRating: 'Targets evening hours when official electricity board offices are closed',
    modusOperandi: [
      'Victim receives urgent SMS: "Dear consumer, your electricity will be disconnected tonight at 9:30 PM by electricity office because your previous month bill was not updated. Immediately contact Electricity Officer on 98XXXXXXXX."',
      'Panicked victim calls the number; the caller speaks in official tone and asks victim to pay a token ₹10 update fee.',
      'Victim is sent a link to install "Suvidha.apk" or "QuickSupport / AnyDesk".',
      'The APK silently intercepts incoming bank OTPs and grants complete background control of the phone to fraudsters.'
    ],
    realScriptExample: '"URGENT NOTICE: Your electricity connection CA NO: 881920 will be disconnected at 21:30 hrs today due to unpaid dues. Please call our power officer at +91-9123456789 immediately to avoid blackout."',
    redFlags: [
      'SMS sent from ordinary 10-digit mobile numbers (+91...) instead of official government header sender IDs (e.g. WBSEDCL, BESCOM, TPDDL, TANGEDCO).',
      'Threat of disconnection within hours without prior statutory physical notice.',
      'Directing the user to download an application file (.apk) or screen-sharing software.',
      'Requesting a small ₹5 or ₹10 test transaction via UPI.'
    ],
    legalSections: {
      itAct: 'Section 66, Section 66C, Section 66D (Hacking & data theft)',
      bns: 'Section 318(4) BNS'
    },
    preventativeMeasures: [
      'Always pay utility bills through official DISCOM portals, authorized BBPS apps (Bharat BillPay), or the official DISCOM app.',
      'Electricity boards NEVER send disconnection warnings from personal mobile numbers.',
      'Never install .apk files received over WhatsApp or SMS; enable Google Play Protect on your phone.',
      'Never install AnyDesk, TeamViewer, or RustDesk on instructions from an unknown caller.'
    ],
    goldenHourAdvice: 'Immediately switch your phone to Airplane Mode to sever remote screen connection, uninstall the suspicious app, and call your bank from a secondary device to freeze accounts.'
  },
  {
    id: 'courier-customs-sms',
    title: 'India Post & FedEx "Address Incomplete" SMS Phishing',
    category: 'financial',
    categoryLabel: 'Phishing & Smishing',
    summary: 'Fraudsters send bulk SMS claiming an India Post parcel could not be delivered due to an incorrect house number, directing victims to a lookalike phishing site requiring a ₹25 redelivery fee.',
    severity: 'High',
    prevalenceRating: 'Millions of automated smishing SMS delivered daily across Indian telecom networks',
    modusOperandi: [
      'Victim receives SMS claiming a parcel is detained at India Post sorting hub due to incomplete street address.',
      'SMS contains a shortened phishing URL (e.g., indiapost-track-redeliver.top).',
      'Website replicates the official Department of Posts interface with Ashoka emblem.',
      'Victim enters their address and is asked to pay a minor redelivery charge (₹25–₹50) using credit/debit card or netbanking.',
      'Phishing page steals card numbers, CVV, and OTP, subsequently executing unauthorized high-value debits.'
    ],
    realScriptExample: '"[India Post] Notice: Your shipment IN-9921-DEL cannot be delivered due to wrong street address. Please update your details within 24 hours at https://indiapost-shipment-redeliver.cc or package will be returned to sender."',
    redFlags: [
      'URL domain does not end in the official government top-level domain (.gov.in or .nic.in).',
      'SMS sent from a random private mobile number rather than authorized government sender ID (e.g., AD-INPOST).',
      'Urgent 24-hour deadline creating artificial pressure.',
      'Demanding debit card details and OTP for a routine parcel redelivery.'
    ],
    legalSections: {
      itAct: 'Section 66C, Section 66D',
      bns: 'Section 318(4) BNS'
    },
    preventativeMeasures: [
      'Verify tracking numbers solely on the official Department of Posts portal (indiapost.gov.in).',
      'Official India Post portals ALWAYS reside under .gov.in domains.',
      'Never click links in SMS regarding unexpected parcels you did not order.',
      'Block and report the sender number on the Sanchar Saathi Chakshu platform.'
    ],
    goldenHourAdvice: 'If card details and OTP were entered, immediately block your debit/credit card via your banking app or netbanking security portal, and dial 1930.'
  },
  {
    id: 'predatory-loan-apps',
    title: 'Predatory Instant Loan Apps & Extortion',
    category: 'identity',
    categoryLabel: 'Extortion & Harassment',
    summary: 'Unlicensed loan applications promise instant disbursement within minutes, demand total access to phone contacts and photo gallery, and blackmail victims with morphed pictures.',
    severity: 'Critical',
    prevalenceRating: 'Severe social and psychological impact across student and gig-worker demographics',
    modusOperandi: [
      'App advertised on social media offering instant loans of ₹5,000–₹10,000 without collateral or CIBIL check.',
      'Upon installation, app demands extensive permissions: Read Contacts, Storage, Camera, Call Logs.',
      'Loan is disbursed after deducting 40%–50% upfront as "processing fees" (e.g., ₹2,800 received for ₹5,000 loan).',
      'Within 6 days, recovery agents begin threatening calls, sending abusive messages and morphed photos to the victim\'s entire contact list.'
    ],
    realScriptExample: '"Recovery agent on WhatsApp: You have not repaid your loan. We have downloaded your private photo gallery and phone contacts. Repay ₹15,000 immediately or your morphed obscene photos will be broadcast to your parents, college friends, and colleagues."',
    redFlags: [
      'App is not hosted on official app stores or lacks an RBI-registered NBFC backing.',
      'Demanding full device permissions (Contacts, Media, Camera) for a simple financial transaction.',
      'Repayment window of only 6–7 days with extortionate interest rates (up to 300% annualized).',
      'Abusive WhatsApp calls from masked numbers threatening social defamation.'
    ],
    legalSections: {
      itAct: 'Section 66E (Violation of privacy), Section 67 (Publishing obscene material)',
      bns: 'Section 308 (Extortion), Section 351 (Criminal intimidation), Section 79 (Outraging modesty)'
    },
    preventativeMeasures: [
      'Verify NBFC registration: Only borrow from apps tied to RBI-registered banks or NBFCs (check list on rbi.org.in).',
      'Never grant Contact or Media storage permissions to any financial utility app.',
      'Never pay extortion money to blackmailers—paying only invites further demands.',
      'Lodge an immediate police complaint with your local cyber cell and inform close family members about the extortion tactic.'
    ],
    goldenHourAdvice: 'Take screenshots of all abusive chats and transaction receipts, uninstall the malicious app, notify your contacts that your phone was compromised, and file a complaint on cybercrime.gov.in.'
  }
];

export const SCAM_PRESETS: ScamPreset[] = [
  {
    id: 'preset-digital-arrest',
    name: 'CBI Video Call / Digital Arrest Threat',
    sampleType: 'Call Script',
    rawText: 'ATTENTION: This is Inspector Ajay Kumar from CBI Crime Branch New Delhi. An international narcotics parcel containing 140g MDMA and 5 fake passports has been seized at Mumbai Customs registered under your Aadhaar. An arrest warrant has been issued by Supreme Court. You are placed under DIGITAL ARREST. Remain on this Skype video call and do not contact anyone. You must transfer ₹1,50,000 to the National Anti-Narcotics Verification Escrow Account to prove your innocence and prevent immediate custody.',
    threatLevel: 'Critical Scam',
    threatScore: 99,
    analysisSummary: 'Classic "Digital Arrest" extortion scam impersonating CBI and Supreme Court. Digital Arrest does not exist in Indian jurisprudence.',
    detectedTraps: [
      'Fabricated legal concept ("Digital Arrest" is fictitious)',
      'Impersonation of Central Law Enforcement Agencies (CBI/Customs)',
      'Urgency and isolation tactic (forbidding contact with family or disconnecting)',
      'Demanding funds transfer into an individual/escrow account for "clearance"'
    ],
    immediateAction: 'Do NOT transfer money. Disconnect immediately. CBI and Police never investigate or arrest over video calls. Report immediately to 1930 and cybercrime.gov.in.'
  },
  {
    id: 'preset-olx-qr',
    name: 'OLX Buyer: "Scan QR Code to Receive Money"',
    sampleType: 'WhatsApp',
    rawText: 'Sir, I am Subedar Rajesh Sharma from Army Cantonment. I want to finalize the sofa set you posted on OLX for ₹14,000 without bargaining. Because I am on duty, I am sending an official Army Merchant QR code. Open your Google Pay or PhonePe, select "Scan QR", scan this code and enter your 6-digit UPI PIN. The ₹14,000 will be credited directly to your bank balance immediately.',
    threatLevel: 'Critical Scam',
    threatScore: 98,
    analysisSummary: 'Deadly UPI Reverse Fraud. Entering your UPI PIN will DEBIT ₹14,000 from your account, not credit it.',
    detectedTraps: [
      'Fundamental UPI Rule Violation: Scanning a QR code or entering a PIN is strictly for SENDING money, never receiving.',
      'Military/Army Personnel Impersonation to manufacture false credibility.',
      'Unsolicited purchase without inspecting goods or bargaining.'
    ],
    immediateAction: 'DO NOT scan the QR code and NEVER enter your UPI PIN. Inform the fraudster that receiving UPI payments does not require a PIN. Block the user immediately on WhatsApp and report on OLX.'
  },
  {
    id: 'preset-power-disconnect',
    name: 'Electricity Bill Disconnect Tonight at 9:30 PM',
    sampleType: 'SMS',
    rawText: 'Dear Consumer, Your electricity bill was not updated in our government system. Your electricity power supply will be disconnected tonight at 21:30 hrs by DISCOM office. Immediately contact our senior power officer at 9811234567 to update bill status and avoid disconnection.',
    threatLevel: 'Critical Scam',
    threatScore: 95,
    analysisSummary: 'Malicious Utility Phishing / Remote APK Trap designed to induce panic and force the victim to install remote-access software.',
    detectedTraps: [
      'Sent from an ordinary 10-digit private mobile number instead of official DISCOM government SMS header.',
      'Artificial deadline (9:30 PM) during non-working office hours to induce panic.',
      'Instructing user to call an unverified mobile number instead of official customer care.'
    ],
    immediateAction: 'Ignore the message. Check your real electricity bill status on your official DISCOM mobile app or via BBPS on Paytm/GPay. Never call the personal phone number.'
  },
  {
    id: 'preset-youtube-like',
    name: 'Work-from-Home: Like YouTube Videos for ₹5000/day',
    sampleType: 'WhatsApp',
    rawText: 'Hello! I am Swati from Global Media Influencer Network. We have part-time online remote jobs available. You can easily earn ₹2,500 to ₹5,000 daily simply by subscribing to YouTube channels and writing 5-star hotel reviews. We pay ₹150 for your first 3 trial tasks immediately via UPI. Join our Telegram channel t.me/vip_tasks_earn to get your first task.',
    threatLevel: 'High Risk',
    threatScore: 92,
    analysisSummary: 'Telegram Pre-paid Task Scam. Scammers offer small initial token payouts to build trust before luring victims into high-loss "VIP crypto investment tasks".',
    detectedTraps: [
      'Unsolicited job offer via messaging app with disproportionately high payout for trivial tasks.',
      'Funneling users to an encrypted Telegram group with anonymous admins.',
      'Gateway to Ponzi pre-paid investment tasks requiring deposits to withdraw.'
    ],
    immediateAction: 'Do not accept the offer or join the Telegram group. Block and report the sender on WhatsApp. Report the number on the Chakshu portal.'
  },
  {
    id: 'preset-india-post',
    name: 'India Post: Address Incomplete Delivery Phishing',
    sampleType: 'SMS',
    rawText: 'India Post: Your package IND881903 cannot be delivered due to incomplete street address and pincode mismatch. Please update your delivery details within 12 hours at https://indiapost-parcels-redelivery.org or your package will be confiscated. Small handling fee ₹25 applies.',
    threatLevel: 'Critical Scam',
    threatScore: 96,
    analysisSummary: 'Card Phishing Smishing attack impersonating Department of Posts. The link leads to a clone site designed to harvest credit/debit card credentials and OTPs.',
    detectedTraps: [
      'Suspicious non-government domain (.org / .cc instead of official indiapost.gov.in).',
      'Artificial 12-hour urgency threatening parcel confiscation.',
      'Minor charge bait (₹25) designed to trick victim into submitting banking credentials.'
    ],
    immediateAction: 'Do NOT click the link. Real India Post notices will never come from private mobile numbers and only use .gov.in domains. Track parcels solely on indiapost.gov.in.'
  },
  {
    id: 'preset-safe-bank',
    name: 'Legitimate Bank Alert (For Comparison)',
    sampleType: 'SMS',
    rawText: 'Dear Customer, Your account ending in XX4920 has been credited with INR 5,000.00 on 24-Sep-2026 via NEFT/UPI Ref: 426819201412. Current available balance is INR 38,420.50. - State Bank of India (SBI)',
    threatLevel: 'Legitimate / Safe',
    threatScore: 5,
    analysisSummary: 'Standard legitimate informational transaction credit notification from bank.',
    detectedTraps: [
      'No links or clickable attachments',
      'No demand for PIN, password, or OTP',
      'No panic-inducing language or artificial deadlines'
    ],
    immediateAction: 'Safe informational SMS. Always check that the SMS header matches your official bank (e.g. VK-SBI, AX-HDFC).'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: 'You are selling an old bicycle on OLX for ₹6,000. An interested buyer says they have made a payment and sends a QR code on WhatsApp with the text: "Scan this QR code in Google Pay and enter your UPI PIN to accept payment directly into your bank account."',
    question: 'What should you do?',
    options: [
      'Scan the QR code and enter your UPI PIN to receive the money.',
      'Never scan the QR code or enter your PIN; UPI PIN is only needed to SEND money, never to receive.',
      'Enter a wrong PIN first to test if the QR code is real.',
      'Ask the buyer to send a bigger amount so you can verify the transaction.'
    ],
    correctIndex: 1,
    explanation: 'Correct! The most fundamental rule of UPI in India: UPI PIN is ONLY entered when debited (sending money or checking balance). You NEVER need to scan a QR code or enter a PIN to receive money.',
    safetyRule: 'UPI PIN = Money Goes Out. No PIN is ever required to receive funds.'
  },
  {
    id: 2,
    scenario: 'You receive an urgent WhatsApp video call from a person dressed in a police uniform claiming to be a CBI officer. He shows you a document with a Supreme Court seal stating an arrest warrant has been issued in your name for a narcotics package intercepted at Mumbai Airport, and says you are placed under "Digital Arrest".',
    question: 'How should you respond to this call?',
    options: [
      'Stay on the call and follow the officer’s instructions to transfer money to a verification account.',
      'Immediately disconnect the call. "Digital Arrest" does not exist under Indian Law, and police do not conduct arrests over video calls.',
      'Provide your Aadhaar card details so the officer can check if there was an identity mix-up.',
      'Pay half the demanded penalty to buy time to consult a lawyer.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Indian law enforcement agencies (CBI, ED, State Police, Customs) NEVER conduct investigations, issue arrest warrants, or place citizens under "Digital Arrest" over Skype or WhatsApp video calls. Disconnect immediately and call 1930.',
    safetyRule: 'There is NO such legal concept as "Digital Arrest" in India.'
  },
  {
    id: 3,
    scenario: 'You receive an SMS stating: "Electricity supply to your home will be disconnected at 9:30 PM due to pending bill update. Immediately call power officer at 9876543210 to avoid power cut."',
    question: 'What is the safest way to verify this message?',
    options: [
      'Call the phone number in the SMS immediately to prevent the power cut.',
      'Download the APK application sent by the caller to pay a ₹10 update fee.',
      'Ignore the phone number in the SMS; check your bill status through your official DISCOM app or authorized payment platform (Paytm/GPay/BBPS).',
      'Forward the message to your neighbors to warn them.'
    ],
    correctIndex: 2,
    explanation: 'Correct! Electricity utility companies never send disconnection notices from personal 10-digit mobile numbers with immediate same-day deadlines. Always verify bill status directly via official DISCOM portals.',
    safetyRule: 'Never call numbers provided in panic SMS alerts or install APK files.'
  },
  {
    id: 4,
    scenario: 'To protect your bank account from unauthorized AePS (Aadhaar Enabled Payment System) biometric cloning frauds, what critical preventative step does UIDAI recommend?',
    question: 'Which action permanently prevents fraudulent biometric AePS cash withdrawals?',
    options: [
      'Change your bank account password every week.',
      'Lock your Aadhaar biometrics using the official mAadhaar App or uidai.gov.in portal.',
      'Never use debit cards at ATM machines.',
      'Delete your Aadhaar number from your phone contacts.'
    ],
    correctIndex: 1,
    explanation: 'Correct! When you lock your biometrics via the official mAadhaar app or UIDAI website, all biometric authentications (fingerprint, iris) are completely disabled until you temporarily unlock them, preventing any unauthorized AePS withdrawals.',
    safetyRule: 'Lock your Aadhaar biometrics in the mAadhaar app for instant 100% protection against AePS fraud.'
  },
  {
    id: 5,
    scenario: 'You fall victim to an online cyber fraud and notice ₹50,000 has just been debited from your bank account to an unknown recipient. What is the most critical first step you must take within the "Golden Hour"?',
    question: 'What is the immediate action to take?',
    options: [
      'Wait for 24 hours to see if the bank reverses the amount automatically.',
      'Immediately dial the National Cyber Crime Helpline 1930 to freeze the funds in the banking system.',
      'Post about the scam on social media to shame the fraudster.',
      'Visit your local bank branch on the next working day.'
    ],
    correctIndex: 1,
    explanation: 'Correct! The National Cyber Fraud Reporting System (Helpline 1930) alerts victim and beneficiary banks in real time through CFCFRS. Reporting within the first 2 hours ("The Golden Hour") gives authorities the highest chance of freezing the defrauded funds before the scammer withdraws them at an ATM or transfers to crypto.',
    safetyRule: 'The first 2 hours are the Golden Window: Immediately call 1930!'
  },
  {
    id: 6,
    scenario: 'You are added to a WhatsApp group called "SEBI Institutional Elite Wealth VIP" where members are celebrating 500% profits in pre-IPO allotments. The group admin sends a link to download "AlphaTrades.apk" to invest.',
    question: 'What is the truth about this investment opportunity?',
    options: [
      'It is a legitimate opportunity if members are posting bank credit screenshots.',
      'It is a high-risk financial fraud; SEBI never authorizes WhatsApp trading groups or unofficial APK downloads.',
      'It is safe as long as you only invest a small test amount of ₹5,000.',
      'It is authentic because the group admins use SEBI registration certificates in their profile picture.'
    ],
    correctIndex: 1,
    explanation: 'Correct! SEBI never sanctions investment advice or IPO allotments through WhatsApp/Telegram groups or direct APK downloads. The profits displayed in the custom app are entirely fictitious, and funds sent are siphoned into mule bank accounts.',
    safetyRule: 'Only trade through SEBI-registered brokers listed on sebi.gov.in.'
  }
];

export const HELPLINE_RESOURCES: HelplineResource[] = [
  {
    name: 'National Cyber Crime Reporting Helpline',
    agency: 'Ministry of Home Affairs (I4C)',
    contactNumber: '1930',
    website: 'https://cybercrime.gov.in',
    domain: 'cybercrime.gov.in',
    operationalHours: '24 Hours / 7 Days a week',
    primaryRole: 'Immediate reporting of citizen financial cyber frauds and real-time fund freezing across Indian banks.'
  },
  {
    name: 'Chakshu & Sanchar Saathi',
    agency: 'Department of Telecommunications (DoT)',
    contactNumber: 'Portal Direct',
    website: 'https://sancharsaathi.gov.in',
    domain: 'sancharsaathi.gov.in',
    operationalHours: '24x7 Web Portal',
    primaryRole: 'Report suspicious calls, WhatsApp numbers, fake SMS sender headers, and block lost/stolen mobile handsets nationwide.'
  },
  {
    name: 'RBI Complaint Management System (CMS)',
    agency: 'Reserve Bank of India',
    contactNumber: '14448',
    website: 'https://cms.rbi.org.in',
    domain: 'cms.rbi.org.in',
    operationalHours: 'Mon - Fri (Banking Hours)',
    primaryRole: 'Lodge complaints against banks and NBFCs for unauthorized electronic banking transactions and non-adherence to zero liability policy.'
  },
  {
    name: 'CERT-In Incident Reporting',
    agency: 'Ministry of Electronics & IT (MeitY)',
    contactNumber: '1800-11-4949',
    website: 'https://cert-in.org.in',
    domain: 'cert-in.org.in',
    operationalHours: '24x7 Incident Desk',
    primaryRole: 'National nodal agency for responding to computer security incidents, malware outbreaks, and phishing domain takedowns.'
  },
  {
    name: 'SEBI SCORES Portal',
    agency: 'Securities and Exchange Board of India',
    contactNumber: '1800 22 7575 / 1800 266 7575',
    website: 'https://scores.sebi.gov.in',
    domain: 'scores.sebi.gov.in',
    operationalHours: '9:00 AM - 6:00 PM',
    primaryRole: 'Grievance redressal for fraudulent investment schemes, unapproved stock advisory groups, and bogus IPO brokers.'
  },
  {
    name: 'UIDAI Aadhaar Support & Lock',
    agency: 'Unique Identification Authority of India',
    contactNumber: '1947',
    website: 'https://myaadhaar.uidai.gov.in',
    domain: 'uidai.gov.in',
    operationalHours: '24x7 IVR / Mon-Sat Helpline',
    primaryRole: 'Lock and unlock biometric credentials to safeguard against AePS fingerprint cloning fraud.'
  }
];

export const GOOGLE_SITES_BLUEPRINT: GoogleSitePageSpec[] = [
  {
    pageTitle: 'Home / CyberSuraksha Portal',
    slug: 'home',
    layoutType: 'Large Banner + 3-Column Content Blocks + Collapsible Announcement Strip',
    summary: 'The central landing page introducing the threat landscape in India, emergency 1930 quick dial button, and the Golden Hour action protocol.',
    recommendedBlocks: [
      'Header Banner: Large banner with dark background and clear title ("Cyber Frauds in India: Citizen Awareness & Protection")',
      'Callout Box: High-visibility yellow/amber banner for Helpline 1930',
      '3-Column Cards: 1. Digital Arrest Scams, 2. UPI QR Code Frauds, 3. Telegram Task Scams',
      'Collapsible Group: "What to do in the first 2 hours if money was debited"',
      'Button Widget: "Report on National Cybercrime Portal" linking to cybercrime.gov.in'
    ],
    readyCopyMarkdown: `# Cyber Frauds in India: Citizen Awareness & Protection

## Emergency Alert
**Dial 1930 immediately** if you have lost money to an online fraud. Report within 2 hours ("The Golden Hour") to freeze the stolen funds before scammers transfer them.

---

### Key Cyber Threats in India
1. **Digital Arrest Scams**: Fake police or CBI video calls demanding money transfers. (Note: Digital arrest does NOT exist in Indian law).
2. **UPI QR Code Frauds**: Fraudsters trick sellers into scanning QR codes or entering PINs to "receive" funds. (Rule: You NEVER enter a PIN to receive money).
3. **Part-Time Task Frauds**: "Like YouTube videos" scams leading to frozen Telegram deposits.
4. **AePS Biometric Cloning**: Stolen fingerprints from land deeds. Prevented by locking biometrics on mAadhaar.

Official Reporting Portal: https://cybercrime.gov.in
Emergency Helpline: 1930`
  },
  {
    pageTitle: 'Common Scams & Modus Operandi',
    slug: 'modus-operandi',
    layoutType: 'Collapsible Text Sections with 2-Column Text + Image Layouts',
    summary: 'Detailed dossiers on the 8 most widespread cyber frauds in India with red flags, real scripts, and prevention steps.',
    recommendedBlocks: [
      'Table of Contents widget at top',
      'Collapsible sections for each scam type (Digital Arrest, UPI, Work-from-home, Loan Apps, Electricity Bill APK)',
      'Side-by-side callout boxes: Red Flags (Left) vs How to Protect Yourself (Right)'
    ],
    readyCopyMarkdown: `## Major Cyber Scams in India & How Criminals Operate

### 1. The "Digital Arrest" Extortion
- **Modus Operandi**: Fraudsters call via Skype pretending to be CBI/Customs claiming a parcel with narcotics was found in your name.
- **Red Flags**: Demanding you stay on video call 24x7; demanding funds transfer to "secret RBI accounts".
- **Golden Rule**: Police NEVER arrest people via video calls.

### 2. The UPI "Scan QR to Receive Money" Trap
- **Modus Operandi**: Buyers on OLX claim they are in the Indian Army and send a QR code to transfer payment to you.
- **Red Flags**: Asking you to enter your 4-digit or 6-digit UPI PIN to "receive" funds.
- **Golden Rule**: UPI PIN is ONLY needed for paying, never for receiving.`
  },
  {
    pageTitle: 'Emergency 1930 & Victim SOP',
    slug: 'emergency-sop',
    layoutType: 'Numbered Process Flow / Step-by-Step Vertical Cards',
    summary: 'Standard Operating Procedure (SOP) for citizens who have suffered an unauthorized debit or cyber extortion.',
    recommendedBlocks: [
      'Numbered List Block (Steps 1 to 5)',
      'Checklist of documents needed before calling 1930',
      'Downloadable complaint letter format / text block'
    ],
    readyCopyMarkdown: `## 5-Step Action Protocol for Cyber Fraud Victims

1. **Step 1 - Dial 1930 Immediately**: Call the Citizen Financial Cyber Fraud Reporting System within 2 hours.
2. **Step 2 - Note Transaction Details**: Keep UTR number, bank account number, time, and debit SMS ready.
3. **Step 3 - Contact Your Bank Fraud Desk**: Block debit/credit cards and netbanking to prevent further unauthorized deductions.
4. **Step 4 - File Complaint Online**: Register a formal complaint at https://cybercrime.gov.in and download the PDF acknowledgment.
5. **Step 5 - Lock Biometrics**: If money was withdrawn via AePS without OTP, lock Aadhaar biometrics on the mAadhaar app.`
  },
  {
    pageTitle: 'Helpline & Official Resources Directory',
    slug: 'helplines',
    layoutType: 'Contact Card Grid + Google Map / Embed Section',
    summary: 'Verified contacts for National Cyber Crime Portal, Sanchar Saathi, RBI Ombudsman, and CERT-In.',
    recommendedBlocks: [
      'Button links to official government portals',
      'Contact card blocks with phone numbers and official .gov.in URLs',
      'Google Form embed widget for citizen feedback or local seminar inquiries'
    ],
    readyCopyMarkdown: `## Official Government Helplines & Portals

- **National Cyber Crime Helpline**: 1930 (Toll-Free, 24x7)
- **National Cyber Crime Portal**: https://cybercrime.gov.in
- **Chakshu (Report Fraud Calls & SMS)**: https://sancharsaathi.gov.in
- **RBI Banking Ombudsman (CMS)**: 14448 | https://cms.rbi.org.in
- **Aadhaar Biometric Helpline**: 1947 | https://myaadhaar.uidai.gov.in`
  }
];
