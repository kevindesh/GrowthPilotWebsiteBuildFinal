export async function submitToGoogleSheet(formData: {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  specifications: string;
  tagline?: string;
  servicesPricing?: string;
  valuesMission?: string;
  referrer?: string;
  logo: File | null;
}) {
  try {
    // Replace with your Google Apps Script URL
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzLEa17efPawPYL225_ZNb-W9JPMlCsMmefFe_6sydu-mIVwvbc1dcCMqBfNfePJJfa/exec";

    // Convert logo to Base64 if it exists
    let logoData = null;
    let logoName = null;
    let logoType = null;

    if (formData.logo) {
      logoName = formData.logo.name;
      logoType = formData.logo.type;
      logoData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(formData.logo as Blob);
      });
    }

    // specific hack: Google Apps Script handles plain POST bodies best to avoid CORS preflight issues
    const payload = {
      fullName: formData.fullName,
      businessName: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      specifications: formData.specifications,
      tagline: formData.tagline || "",
      servicesPricing: formData.servicesPricing || "",
      valuesMission: formData.valuesMission || "",
      referrer: formData.referrer || "",
      logo: logoData,
      logoName, 
      logoType
    };

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      // We use text/plain to avoid CORS preflight OPTIONS request which GAS doesn't handle well
      headers: { "Content-Type": "text/plain;charset=utf-8" }, 
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Attempt to parse the response from the script
    const result = await response.json();
    if (result.result !== "success") {
      throw new Error(`Google Sheet Error: ${result.error || "Unknown script error"}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheet:", error);
    throw error;
  }
}