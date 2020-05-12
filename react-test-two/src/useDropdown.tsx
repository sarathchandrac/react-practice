import React, { FunctionComponent , useState} from 'react';
interface PropsType {
  children: JSX.Element
  name: string
}

const useDropdown = (label: string, defaultState:string, options: string []) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
    // class Dropdown  {
    //     render() {
    //         return <h2>{ this.props.children}</h2>;
    //     }
    // }



    const Dropdown: FunctionComponent<{}> = () =>  <aside>


                <label htmlFor={id}>
                    {label}
                    <select
                        id={id}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        onBlur={(e) => setState(e.target.value)}
                        disabled={options.length === 0}
                    >
                        <option>All</option>
                        {options.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </label>
                </aside>

    return [state, Dropdown, setState];
}

export default useDropdown;
