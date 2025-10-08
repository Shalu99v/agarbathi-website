interface WhatsAppProps {
  phone: string;
}

export default function WhatsAppButton({ phone }: WhatsAppProps) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block"
    >
      WhatsApp Us
    </a>
  );
}
