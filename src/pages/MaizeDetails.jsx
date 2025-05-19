import React from 'react';

function MaizeDetails() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-yellow-800 text-center">🌽 Maize (Corn) Storage & Preservation Guide</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">1. Harvesting at the Right Time</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Harvesting+Maize"
          alt="Harvesting maize"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Harvest maize when the husk turns brown and kernels are hard and glossy. <br />
          - Ensure the cobs are fully matured to prevent moisture-related spoilage.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">2. Drying Maize Properly</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Drying+Maize+Cobs"
          alt="Drying maize"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - After harvesting, dry maize in the sun for 2–3 weeks. <br />
          - Use elevated platforms or tarpaulins to avoid contact with the ground. <br />
          - Moisture content should be reduced to around 13% for safe storage.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">3. Shelling and Further Drying</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Shelling+Maize"
          alt="Shelling maize"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Shell maize manually or with a sheller once properly dried. <br />
          - Re-dry the shelled grains under the sun to remove residual moisture.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">4. Storing Maize Safely</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Storing+Maize+in+Bags"
          alt="Maize storage"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Store maize in airtight containers, jute bags, or sealed sacks in a **cool, dry, and ventilated** place. <br />
          - Use **hermetic bags** to prevent pest infestation and mold growth.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">5. Pest Prevention</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Protect+Maize+from+Pests"
          alt="Pest control"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Regularly inspect stored maize for signs of weevils or mold. <br />
          - Use natural insect repellents like dried neem leaves or apply safe pesticides if needed.
        </p>
      </section>

      <div className="text-center mt-8 text-sm text-gray-600">
        ✅ Tip: Always test maize moisture using a grain moisture meter before storage to avoid spoilage.
      </div>
    </div>
  );
}

export default MaizeDetails;
