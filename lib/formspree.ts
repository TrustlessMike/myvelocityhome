export async function submitToFormspree(formId: string, data: Record<string, any>) {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    return { success: response.ok, data: result }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { success: false, error }
  }
}
