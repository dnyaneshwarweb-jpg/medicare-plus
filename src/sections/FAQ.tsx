export default function FAQ() {
  const faqs = [
    "Do you offer emergency services?",
    "How can I book an appointment?",
    "Do you accept insurance?",
    "What specialties are available?",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq}
              className="rounded-2xl border p-6"
            >
              <h3 className="font-semibold">{faq}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}