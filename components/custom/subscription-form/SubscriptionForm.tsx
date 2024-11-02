// src/components/custom/subscription-form/SubscriptionForm.tsx

const SubscriptionForm = () => (
  <div className="rounded-lg bg-card dark:bg-card p-4 border shadow-md text-center mt-4">
    <h3 className="text-lg font-semibold mb-3">Suscribite</h3>
    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
      Recibe las últimas actualizaciones directamente en tu correo.
    </p>
    <form>
      <input
        type="email"
        placeholder="Tu correo electrónico"
        className="w-full p-2 mb-3 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900"
      />
      <button
        type="submit"
        className="w-full bg-card-foreground/10 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
      >
        Suscribirse
      </button>
    </form>
  </div>
);

export default SubscriptionForm;
