function normalizeBody(body: any): Record<string, any> {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  if (Buffer.isBuffer(body)) {
    try {
      return JSON.parse(body.toString("utf8"));
    } catch {
      return {};
    }
  }
  if (typeof body === "object") {
    return body;
  }
  return {};
}

async function getGeminiClient(): Promise<any> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey === "YOUR_GEMINI_API_KEY_HERE") {
    return null;
  }

  try {
    const { GoogleGenAI } = await import("@google/genai");
    return new GoogleGenAI({ apiKey });
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client:", err);
    return null;
  }
}

function getSmartLegalResponse(message: string) {
  const lower = message.toLowerCase();
  let text = `**Munsif.ai Statutory Legal Analysis for Query:** "${message}"\n\n1. **Applicable Legal Framework under Pakistani Law:**\n   - Your query touches upon statutory rights regulated by the **Pakistan Penal Code (PPC 1860)**, **Code of Criminal Procedure (CrPC 1898)**, and the **Code of Civil Procedure (CPC 1908)**.\n\n2. **Procedural Roadmap for Relief:**\n   - **Criminal Matters:** If an offence has occurred, file a written complaint at the local Police Station under Section 154 CrPC. If the SHO refuses FIR registration, file a petition under Section 22-A/22-B CrPC in the Sessions Court.\n   - **Civil Matters:** File a civil suit before the Senior Civil Judge having territorial jurisdiction. Ensure all documentary proof (agreements, receipts, notices) is preserved.\n   - **Constitutional/Rights Violations:** If state officials or law enforcement act unlawfully, file a Constitutional Writ Petition under Article 199 before the High Court.\n\n3. **Recommended Immediate Action:**\n   - Use our **File Complaint Intake** tab to generate a structured case file, identify specific PPC sections, and automatically draft a High Court petition.\n\n**Urdu Guidance / اردو میں رہنمائی:**\nآپ کے سوال کے حوالے سے تعزیراتِ پاکستان اور ضابطہ فوجداری کے قوانین لاگو ہوتے ہیں۔ فوری ریلیف کے لیے متعلقہ تھانے میں درخواست دیں یا سیشن کورٹ میں 22-A کی پٹیشن دائر کریں۔ ہماری ایپ کا \"File Complaint\" کا آپشن استعمال کر کے آپ مکمل درخواست کا مسودہ تیار کر سکتے ہیں۔`;
  let legalBasis = "Pakistan Statutory Framework (PPC, CrPC & CPC)";
  let sectionRef = "Munsif.ai Legal Counsel";
  let sources = [
    { title: "Pakistan Penal Code 1860 (Official Gazette)", url: "https://pakistan-law-site.org" },
    { title: "Code of Criminal Procedure 1898", url: "https://pakistanlaw.justice.gov.pk" }
  ];

  if (lower.includes("420") || lower.includes("cheat") || lower.includes("fraud") || lower.includes("dhoka")) {
    text = `**Legal Analysis under Section 420 & 415 PPC (Cheating & Fraud):**\n\n1. **Statutory Definition (Section 415 PPC):** Cheating occurs when a person, by deceiving any person, fraudulently or dishonestly induces the victim to deliver any property, or to consent that any person shall retain any property.\n\n2. **Section 420 PPC Offence:** Covers cheating and dishonestly inducing delivery of property, or making/altering/destroying the whole or any part of a valuable security.\n   - **Punishment:** Imprisonment of either description for a term which may extend to **7 years**, and shall also be liable to fine.\n   - **Nature of Offence:** Cognizable, Non-Bailable, and Compoundable with permission of the Court.\n\n3. **Procedural Action & Remedy under CrPC:**\n   - **Police FIR:** Submit a written application under Section 154 CrPC to the local Station House Officer (SHO).\n   - **Private Complaint (Istimghasa):** If police fail to register FIR, file a direct complaint under Section 200 CrPC before the Judicial Magistrate.\n   - **Justice of Peace Petition:** File a petition under Section 22-A / 22-B CrPC in the Sessions Court to order registration of FIR.\n\n**Urdu Summary / خلاصہ:**\nدفعہ 420 تعزیراتِ پاکستان کے تحت دھوکہ دہی اور رقم یا جائیداد حاصل کرنا قابلِ تعزیر جرم ہے جس کی سزا 7 سال قید اور جرمانہ ہے۔ آپ علاقائی تھانے میں دفعہ 154 کے تحت FIR یا سیشن کورٹ میں 22-A کی درخواست جمع کرا سکتے ہیں۔`;
    legalBasis = "PPC Section 420 & 415 / CrPC Section 154 & 22-A";
    sectionRef = "PPC Sec 420";
  } else if (lower.includes("489") || lower.includes("cheque") || lower.includes("bounce") || lower.includes("check")) {
    text = `**Legal Analysis under Section 489-F PPC (Dishonest Issuance of Cheque):**\n\n1. **Statutory Offence (Section 489-F PPC):** Whoever dishonestly issues a cheque towards re-payment of a loan or fulfillment of an obligation which is dishonoured on presentation shall be punished.\n\n2. **Legal Ingredients & Test (Supreme Court SCMR Guidelines):**\n   - Cheque must be issued dishonestly (with fraudulent intention).\n   - Issued towards repayment of loan or fulfillment of a legal obligation.\n   - Cheque bounced upon presentation due to insufficient funds or stop payment instructions.\n   - **Punishment:** Imprisonment up to **3 years**, or with fine, or with both.\n\n3. **Procedural Steps & Precedents:**\n   - Obtain formal Cheque Return Memo / Advice from the bank.\n   - Issue legal notice to drawer demanding payment within 14 days.\n   - File FIR under Section 154 CrPC at police station where the bank branch is situated.\n\n**Urdu Summary / خلاصہ:**\nبونس چیک کا اجرا دفعہ 489-F تعزیراتِ پاکستان کے تحت جرم ہے جس کی سزا 3 سال قید یا جرمانہ ہے۔ بینک سے ڈس آنر میمو حاصل کر کے قانونی نوٹس دیں اور متعلقہ تھانے میں ایف آئی آر درج کروائیں۔`;
    legalBasis = "PPC Section 489-F / PLD 2014 SC 241";
    sectionRef = "PPC Sec 489-F";
  }

  return { text, legalBasis, sectionRef, sources };
}

export default async function handler(req: any, res: any) {
  try {
    const body = normalizeBody(req.body);
    const message = typeof body.message === "string" ? body.message : "";
    const history = Array.isArray(body.history) ? body.history : [];

    if (!message.trim()) {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = await getGeminiClient();
    if (!ai) {
      return res.status(200).json(getSmartLegalResponse(message));
    }

    const systemInstruction = `You are Munsif.ai Legal Counsel, an expert, empathetic, and highly detailed AI research assistant specializing in Pakistani law.\nProvide clear, authoritative legal analysis grounded in the Pakistan Penal Code (PPC), Code of Criminal Procedure (CrPC), Code of Civil Procedure (CPC), Constitution of Pakistan (1973), Illegal Dispossession Act, and landmark Supreme Court of Pakistan decision precedents (PLD, SCMR, CLC, YLR).\nWhen answering:\n1. Identify relevant statutory sections (e.g., PPC 420, CrPC 497, Article 199).\n2. Detail the exact legal test, procedure, or remedy available to the citizen.\n3. Cite landmark Pakistani case precedents where applicable.\n4. If the user asks in Urdu or Roman Urdu, respond with clear Urdu / Roman Urdu explanation along with English statutory citations.\n5. Clarify that your advice provides research and preliminary guidance.`;

    const sanitizedHistory: Array<{ role: string; parts: Array<{ text: string }> }> = [];
    for (const item of history) {
      const textVal = item.content || item.text || item.parts?.[0]?.text || "";
      if (!textVal.trim()) continue;
      const role = item.role === "user" ? "user" : "model";
      if (sanitizedHistory.length === 0 && role === "model") {
        continue;
      }
      sanitizedHistory.push({ role, parts: [{ text: textVal }] });
    }

    sanitizedHistory.push({ role: "user", parts: [{ text: message }] });

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: sanitizedHistory as any,
        config: {
          systemInstruction,
          temperature: 0.3,
          tools: [{ googleSearch: {} }]
        }
      });

      const replyText = response.text || "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const sources = groundingChunks?.map((chunk: any) => ({
        title: chunk.web?.title || "Legal Source",
        url: chunk.web?.uri || ""
      })).filter((s: any) => s.url) || [];

      return res.status(200).json({
        text: replyText || getSmartLegalResponse(message).text,
        legalBasis: "Pakistan Statutory & Case Law (PPC / CrPC / SCMR Archives)",
        sectionRef: "Munsif.ai Research Engine",
        sources
      });
    } catch (groundingErr) {
      console.warn("Search grounding failed, falling back to standard gemini-2.0-flash:", groundingErr);
      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: sanitizedHistory as any,
          config: {
            systemInstruction,
            temperature: 0.3
          }
        });

        return res.status(200).json({
          text: response.text || getSmartLegalResponse(message).text,
          legalBasis: "Pakistan Statutory & Case Law (PPC / CrPC / SCMR Archives)",
          sectionRef: "Munsif.ai Research Engine",
          sources: []
        });
      } catch (genErr) {
        console.error("Gemini direct generation error:", genErr);
        return res.status(200).json(getSmartLegalResponse(message));
      }
    }
  } catch (error: any) {
    console.error("Chat API handler error:", error?.message || error);
    return res.status(200).json(getSmartLegalResponse(req.body?.message || ""));
  }
}
