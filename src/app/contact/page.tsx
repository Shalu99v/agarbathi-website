import WhatsAppButton from "../components/WhatsappButton";


export default function ContactPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <p>Have questions or want to order? Contact us directly via WhatsApp:</p>
      <div className="mt-4">
        <WhatsAppButton phone="91XXXXXXXXXX" />
      </div>
    </div>
  );
}
