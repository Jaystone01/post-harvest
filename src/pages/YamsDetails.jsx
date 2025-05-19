import React from 'react';

function YamsDetails() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">🥔 Yam Storage & Preservation Guide</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">1. Storing Fresh Yams</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Fresh+Yams"
          alt="Fresh yams"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Store yams in a **cool, dry, and well-ventilated** space like a pantry. <br />
          - Avoid exposure to **moisture**, which can cause rotting. <br />
          - Do not store yams in plastic bags — use baskets or ventilated crates. <br />
          - Ideal temperature range is **12–16°C (53–60°F)**.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">2. Avoid Refrigeration</h2>
        <img
          src="https://via.placeholder.com/600x300?text=No+Fridge"
          alt="Do not refrigerate yams"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Yams should **never be stored in the refrigerator**. <br />
          - Cold temperatures cause them to harden in the center and alter their flavor. <br />
          - This also promotes the conversion of starch to sugar, affecting taste and texture.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">3. Preserving Yams by Freezing</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Frozen+Yams"
          alt="Frozen yams in containers"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Peel, boil, and mash or cut yams into chunks before freezing. <br />
          - Allow them to cool completely, then place in airtight containers or freezer bags. <br />
          - Label with date and use within 6–12 months for best quality.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">4. Drying Yams</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Dried+Yams"
          alt="Dried yam slices"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Peel and slice yams into thin pieces. <br />
          - Sun-dry them on clean mats or trays, or use a food dehydrator. <br />
          - Store in airtight containers in a dry place. <br />
          - Dried yams can be ground into flour or rehydrated for cooking.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">5. Yam Flour (Elubo)</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Yam+Flour"
          alt="Yam flour"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Boil, slice, dry, and grind yams into powder to make **elubo** (yam flour). <br />
          - Store the flour in sealed containers to avoid moisture. <br />
          - This method allows yams to last for several months to a year.
        </p>
      </section>

      <div className="text-center mt-8 text-sm text-gray-500">
        ✅ Tip: Inspect stored yams regularly and remove any that show signs of spoilage or sprouting.
      </div>
    </div>
  );
}

export default YamsDetails;
