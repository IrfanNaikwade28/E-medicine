import { useState } from 'preact/hooks';

interface DropdownProps {
  options: string[];
}

export const Dropdown = ({ options }: DropdownProps) => {
  const [selected, setSelected] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative inline-block w-32">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div
            className="my-2 p-1 flex border-gray-200 bg-white rounded items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <input 
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              placeholder="City"
              value={selected}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
            <div
              className="text-gray-300 w-8 h-5 py-1 pl-2 pr-1 border-r border-gray-500 flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#000000"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.84l3.71-3.65a.75.75 0 111.06 1.06l-4.24 4.18a.75.75 0 01-1.06 0l-4.24-4.18a.75.75 0 01-.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute shadow bg-white z-10 w-full left-0 rounded max-h-select overflow-y-auto">
          <div className="flex flex-col w-full">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                  setSearch('');
                }}
              >
                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                  <div className="w-full items-center flex">
                    <div className="mx-2 leading-6 font-semibold">{option}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}