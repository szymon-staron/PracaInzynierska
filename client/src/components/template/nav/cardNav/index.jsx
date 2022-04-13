import { useState } from 'react';
import classNames from 'classnames';
import './styles.scss';
import { brandSchema, sizeSchema, genderSchema, priceSchema } from 'db';
import { CheckboxField } from 'components/template/checkboxField';

export const CardNav = () => {
    const [active, setActive] = useState({
        brand: false, size: false, gender: false, price: false
    });

    const handleToggleDropdown = (value) => setActive((prev) => ({ ...prev, [value]: !prev[value] }));
    const brandDropdown = brandSchema.map((el) => <li className='dropdown__list'><CheckboxField {...el} /></li>)
    const sizeDropdown = sizeSchema.map((el) => <li className='dropdown__list'><CheckboxField {...el} /></li>)
    const genderDropdown = genderSchema.map((el) => <li className='dropdown__list'><CheckboxField {...el} /></li>)
    const priceDropdown = priceSchema.map((el) => <li className='dropdown__list'><CheckboxField {...el} /></li>)
    return (
        <aside className='cardnav__aside'>
            <nav>
                <ul>
                    <li className='dropdown__li' onClick={() => handleToggleDropdown('brand')}>
                        <span className='dropdown__name'> Marka</span>
                        <div>
                            <ul className={classNames('dropDown', { dropDown__open: active.brand })}>
                                {brandDropdown}
                            </ul>
                        </div>
                    </li>
                    <li className='dropdown__li' onClick={() => handleToggleDropdown('size')}>
                        <span className='dropdown__name'> Rozmiar</span>
                        <div>
                            <ul className={classNames('dropDown', { dropDown__open: active.size })}>
                                {sizeDropdown}
                            </ul>
                        </div>
                    </li>
                    <li className='dropdown__li' onClick={() => handleToggleDropdown('gender')}>
                        <span className='dropdown__name'> Płeć</span>
                        <div>
                            <ul className={classNames('dropDown', { dropDown__open: active.gender })}>
                                {genderDropdown}
                            </ul>
                        </div>
                    </li>
                    <li className='dropdown__li' onClick={() => handleToggleDropdown('price')}>
                        <span className='dropdown__name'> Cena</span>
                        <div>
                            <ul className={classNames('dropDown', { dropDown__open: active.price })}>
                                {priceDropdown}
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
