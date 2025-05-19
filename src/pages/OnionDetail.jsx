import React from 'react';

function OnionDetail() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-yellow-800 text-center">🧅 Onion Storage & Preservation Guide</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">1. Storing Fresh Onions</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Fresh+Onions"
          alt="Fresh onions"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Store whole onions in a **cool, dry, well-ventilated** area. <br />
          - Use mesh bags, baskets, or open bins for proper airflow. <br />
          - Avoid plastic bags—they trap moisture and lead to rot. <br />
          - Ideal temperature: **10–15°C (50–59°F)**.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">2. Avoid Refrigeration</h2>
        <img
          src="https://via.placeholder.com/600x300?text=No+Fridge+for+Onions"
          alt="Avoid fridge for onions"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Whole onions should **not be stored in the refrigerator**, as cold and moisture lead to mold and spoilage. <br />
          - Refrigeration is only okay for **peeled or chopped** onions in airtight containers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">3. Preserving Cut or Peeled Onions</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Cut+Onions+in+Container"
          alt="Chopped onions in container"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Store peeled or chopped onions in an **airtight container** in the fridge. <br />
          - Use within **7–10 days**. <br />
          - Keep them away from fruits like apples to avoid flavor transfer.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">4. Freezing Onions</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Frozen+Onions"
          alt="Frozen onions"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Peel and chop onions, then freeze them in small portions. <br />
          - Use ziplock bags or airtight containers. <br />
          - Frozen onions are best for **cooking** — not for raw dishes due to texture changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">5. Drying Onions</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Dehydrated+Onion+Slices"
          alt="Dried onion slices"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Slice onions thinly and dry them using a food dehydrator or sun-drying. <br />
          - Store in sealed containers and use in soups, stews, or grind into onion powder.
        </p>
      </section>

      <div className="text-center mt-8 text-sm text-gray-500">
        ✅ Tip: Keep onions away from potatoes — they release moisture and gases that cause spoilage.
      </div>
    </div>
  );
}

export default OnionDetail;
