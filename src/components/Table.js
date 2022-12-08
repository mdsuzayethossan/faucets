import React from "react";

const Table = () => {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-hidden">
        <div class="py-2 inline-block min-w-full">
          <div class="overflow-hidden">
            <table class="min-w-full border">
              <thead class="bg-gray-200 border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    First
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Last
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    1
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                </tr>
                <tr class="border">
                  <td class="px-6 py-4 text-sm font-medium">2</td>
                  <td class="text-sm font-light px-6 py-4">Jacob</td>
                  <td class="text-sm font-light px-6 py-4">Thornton</td>
                  <td class="text-sm font-light px-6 py-4">@fat</td>
                </tr>
                <tr class="">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    5
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Ted
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Obama
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
