import {
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import { useController } from 'react-hook-form';

type Data = {
  file: string;
};
const CustomSelect = ({ avatars, styles, ...props }: any, ref: any) => {
  const {
    field: { value, onChange },
  } = useController(props);

  console.log(avatars);

  const [selected, setSelected] = useState<Data | null>(null);

  const handleChange = (data: Data) => {
    onChange(data);
    setSelected(data);
  };

  return (
    <>
      <Listbox onChange={handleChange}>
        {({ open }) => (
          <>
            <div className="relative mt-2">
              <Listbox.Button
                className={`+ relative flex cursor-pointer justify-center rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-1 focus:ring-[#3c77e6] sm:text-sm sm:leading-6 ${styles}`}
              >
                <span className="flex items-center">
                  {selected ? (
                    <>
                      {' '}
                      <Image
                        src={'data:image/png;base64,' + selected?.file}
                        width={100}
                        height={100}
                        alt=""
                        className="ml-3 block truncate "
                      />
                    </>
                  ) : (
                    <>
                      <div>Выбрать картинку</div>
                    </>
                  )}
                </span>
                {/* <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span> */}
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1  flex max-h-[250px] w-[200px] flex-wrap justify-between  overflow-y-scroll rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {avatars.map((avatar: Data, index: number) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 px-4'
                        )
                      }
                      value={avatar}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center justify-center">
                            <Image
                              src={'data:image/png;base64,' + avatar.file}
                              width={200}
                              height={200}
                              alt=""
                              className="min-h-[50px] w-[65px] flex-shrink-0  object-center sm:w-[50px]"
                            />
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default forwardRef(CustomSelect);
