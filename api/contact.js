// api/contact.js
export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { name, age, gender, location, message } = req.body;
  
        // Here, you can store the data in a database or email it, for example.
        console.log("Received form data:", { name, age, gender, location, message });
  
        // If you're using an email service like SendGrid or Nodemailer, you can integrate it here.
  
        // Respond with success
        res.status(200).json({ message: "Thank you for your message!" });
      } catch (error) {
        console.error("Error processing form:", error);
        res.status(500).json({ message: "Something went wrong. Please try again later." });
      }
    } else {
      // Handle unsupported methods
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  