import React from "react";

const Table = () => {
  const thStyle =
    "text-sm font-semibold p-2 min-w-[80px] border border-[#eee] text-center";
  const tdStyle =
    "text-sm font-medium p-2 min-w-[80px] border border-[#eee] text-center";
  return (
    <div class="flex flex-col">
      <div class="overflow-x-hidden">
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th scope="col" class={thStyle}>
                    #
                  </th>
                  <th scope="col" class={thStyle}>
                    First
                  </th>
                  <th scope="col" class={thStyle}>
                    Last
                  </th>
                  <th scope="col" class={thStyle}>
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class={tdStyle}>1</td>
                  <td class={tdStyle}>Mark</td>
                  <td class={tdStyle}>Otto</td>
                  <td class={tdStyle}>@mdo</td>
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
