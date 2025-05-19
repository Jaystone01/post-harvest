import React from 'react';

function TomatoDetails() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">🍅 Tomato Storage & Preservation Guide</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">1. Storing Fresh Tomatoes</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Fresh+Tomatoes"
          alt="Fresh tomatoes on a counter"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Keep tomatoes at **room temperature** (around 20–22°C or 68–72°F). <br />
          - Place them **stem side down** on a flat surface to prevent bruising. <br />
          - Avoid placing them in the fridge unless they are fully ripe, as cold temperatures dull their flavor.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">2. Refrigerating Ripe Tomatoes</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Ripe+Tomatoes+in+Fridge"
          alt="Ripe tomatoes in fridge"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Only **fully ripe tomatoes** should be refrigerated. <br />
          - Place them in the vegetable drawer. Let them sit at room temp for a few hours before using to restore some flavor.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">3. Freezing Tomatoes</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Frozen+Tomatoes"
          alt="Frozen tomatoes in bags"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Wash and dry the tomatoes. <br />
          - You can **freeze them whole**, chopped, or as purée. <br />
          - Store in zip-lock bags or airtight containers. Label them with date. <br />
          - Frozen tomatoes are great for soups and stews, but not for salads due to texture change.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">4. Making Sun-Dried Tomatoes</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Sun+Dried+Tomatoes"
          alt="Sun dried tomatoes in jar"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Slice tomatoes thinly and sprinkle with salt. <br />
          - Dry them under the sun, in an oven, or a dehydrator. <br />
          - Store in olive oil with herbs for added flavor and preservation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">5. Canning Tomatoes</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Canned+Tomatoes"
          alt="Canned tomatoes in jars"
          className="w-full rounded mb-3"
        />
        <p className="text-gray-700">
          - Use clean jars and lids. Blanch and peel the tomatoes. <br />
          - Add lemon juice or vinegar to maintain acidity. <br />
          - Follow proper water-bath or pressure-canning methods to avoid contamination. <br />
          - Label with date and store in a cool, dark place.
        </p>
      </section>

      <div className="text-center mt-8 text-sm text-gray-500">
        🌱 Tip: Always inspect stored tomatoes regularly for signs of spoilage such as mold or leaks.
      </div>
    </div>
  );
}

export default TomatoDetails;
