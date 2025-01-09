import { useEffect, useRef, useState } from 'react';
import './../styles/menus.css';
import SelectedMenu from './SelectedMenu';

// Composant de la bar de menus défilante au niveau de "Feautures that you need"
const Menus = () => {
    // Numéro du menu sélectionné
    const [selectedValue, setSelectedValue] = useState(0)
    // Référence du menu sélectionné
    const menuRefs = useRef([])
    // Référence de la barre de sélection de menu
    const selectedBarRef = useRef(null)
    
    useEffect(() => {
        for (let i = 0; i < menuRefs.current.length; i++) {
            menuRefs.current[i].addEventListener('click', () => {
                for (let j = 0; j < menuRefs.current.length; j++) {
                    if (menuRefs.current[j].classList.contains('selected') && i!==j) {
                        menuRefs.current[j].classList.remove('selected')
                        menuRefs.current[j].firstElementChild.querySelector('path').setAttribute('fill', '#B3B8D0')
                    }
                }
                setSelectedValue(i)
            })
        }
    }, [])
    
    return (
        <div>
            <div className='menus'>
                <div className='selectedBar' ref={selectedBarRef}></div>
                <div className='menu' ref={(e) => (menuRefs.current[0] = e)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.83328 19.4844C6.69499 19.397 5.61341 18.9522 4.74299 18.2134C3.87257 17.4747 3.25781 16.4798 2.98649 15.3709C2.71517 14.262 2.80117 13.0957 3.2322 12.0385C3.66323 10.9814 4.41726 10.0875 5.38661 9.48438C5.59287 7.87612 6.37811 6.39813 7.59538 5.32701C8.81264 4.25589 10.3785 3.66504 11.9999 3.66504C13.6214 3.66504 15.1872 4.25589 16.4045 5.32701C17.6218 6.39813 18.407 7.87612 18.6133 9.48438C19.5826 10.0875 20.3367 10.9814 20.7677 12.0385C21.1987 13.0957 21.2847 14.262 21.0134 15.3709C20.7421 16.4798 20.1273 17.4747 19.2569 18.2134C18.3865 18.9522 17.3049 19.397 16.1666 19.4844V19.5002H7.83328V19.4844ZM12.8333 12.8335H15.3333L11.9999 8.66688L8.66661 12.8335H11.1666V16.1669H12.8333V12.8335Z" fill="#B3B8D0"></path></svg>
                    <span>Upload Files</span>
                </div>
                <div className='menu' ref={(e) => (menuRefs.current[1] = e)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6665 16.1665H20.3332V17.8332H3.6665V16.1665H5.33317V10.3332C5.33317 8.56506 6.03555 6.86937 7.28579 5.61913C8.53604 4.36888 10.2317 3.6665 11.9998 3.6665C13.7679 3.6665 15.4636 4.36888 16.7139 5.61913C17.9641 6.86937 18.6665 8.56506 18.6665 10.3332V16.1665ZM9.49984 19.4998H14.4998V21.1665H9.49984V19.4998Z" fill="#B3B8D0"></path></svg>
                    <span>Email Notifications</span>
                </div>
                <div className='menu' ref={(e) => (menuRefs.current[2] = e)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.83398L18.8475 4.35565C19.2283 4.44065 19.5 4.77815 19.5 5.16898V13.4915C19.5 15.1631 18.6642 16.7248 17.2733 17.6515L12 21.1673L6.72667 17.6515C5.335 16.724 4.5 15.1631 4.5 13.4923V5.16898C4.5 4.77815 4.77167 4.44065 5.1525 4.35565L12 2.83398ZM15.71 8.85232L11.585 12.9765L9.22833 10.6198L8.05 11.7982L11.5858 15.334L16.8892 10.0307L15.71 8.85232Z" fill="#B3B8D0"></path></svg>
                    <span>Field Validations</span>
                </div>
                <div className='menu' ref={(e) => (menuRefs.current[3] = e)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.10783 17.8918C5.33286 17.1189 4.71828 16.2004 4.2994 15.1892C3.88052 14.1779 3.6656 13.0939 3.667 11.9993C3.667 7.39685 7.39783 3.66602 12.0003 3.66602C16.6028 3.66602 20.3337 7.39685 20.3337 11.9993C20.3337 16.6018 16.6028 20.3327 12.0003 20.3327H3.667L6.10783 17.8918ZM8.667 12.8327C8.667 13.7167 9.01819 14.5646 9.64331 15.1897C10.2684 15.8148 11.1163 16.166 12.0003 16.166C12.8844 16.166 13.7322 15.8148 14.3574 15.1897C14.9825 14.5646 15.3337 13.7167 15.3337 12.8327H8.667Z" fill="#B3B8D0"></path></svg>
                    <span>Auto Responses</span>
                </div>
            </div>
            <SelectedMenu num={selectedValue} menuRefs={menuRefs} selectedBarRef={selectedBarRef}/>
        </div>
    );
};

export default Menus;