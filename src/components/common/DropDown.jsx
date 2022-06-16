import React from 'react'
import arrowDownSvg from '../../assets/icon-arrow-down.svg';
import checkSvg from '../../assets/icon-check.svg'
import arrowUpSvg from '../../assets/icon-arrow-up.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDropDownList, setHideDropDownList, dropDownSelected } from './../../app/ui';


function DropDown({ title, bTitle }) {
  const dispatch = useDispatch()
  const dropDownList = useSelector(state => state.ui.dropDownList)
  const selectedDropItems = useSelector(state => state.ui.selectedDropItems)

  const menuList = [{ title: "paid" }, { title: "pending" }, { title: "draft" }]

  
  const OnShowMenu = () => {
    dispatch(setShowDropDownList())
   }
  const onHideMenu = () => {
    dispatch(setHideDropDownList())
  }

  

  const handleChange = (e) => {
    const state = [...selectedDropItems]
    const index = state.indexOf(e.target.value)
    if (index !== -1) {
      state.splice(index, 1)
    } else {
      state.push(e.target.value)
    }
    dispatch(dropDownSelected(state))
  }

  return (
    <div className="relative  text-left z-10 self-center ">
    <div className="inline-flex justify-center items-center w-full  px-2 py-1 text-sm font-medium " id="menu-button">

      {!dropDownList ?
          <div className=' cursor-pointer text-md'><span onClick={() => OnShowMenu()} >
            <span className=' sm:hidden'>{title}</span>
            <span className=' hidden sm:inline-block'>{ bTitle}</span>

            <img className='inline-block ml-4' src={arrowDownSvg} alt="" /> </span>
        </div>
        :
          <div className=' cursor-pointer text-md'><span onClick={() => onHideMenu()} >
            <span className=' sm:hidden'>{title}</span>
            <span className=' hidden sm:inline-block'>{ bTitle}</span>
            <img className='inline-block ml-4' src={arrowUpSvg} alt="" /> </span>
        </div>

      }
      
    </div>
  
    <div className={`origin-top-right absolute left-[-20px]  mt-5 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${!dropDownList ? 'hidden' : 'block'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
      <div className="py-1" role="none">
          {menuList.map(listItem => (
              <div  key={listItem.title} className='flex px-2 cursor-pointer items-center' id='drop-down-item'>
              <div className={`w-4 h-4 bg-custom-ligth-200 z-10 relative`}>
                <input onChange={handleChange} className=' z-0 invisible outline-none border-0 w-4 h-4' id={listItem.title} value={listItem.title} type="checkbox" name={listItem.title} />
                { selectedDropItems.includes(listItem.title)? <img  className='w-4 h-4 text-white bg-custom-dark-purple absolute top-0 left-0' src={checkSvg} alt="" /> :null}
              </div>
              <label htmlFor={listItem.title} className="text-gray-700 flex justify-between px-4 py-2 text-sm cursor-pointer" role="menuitem"  id="menu-item-0">{listItem.title}</label>
              </div>
          )
          )}
      </div>
    </div>
  </div>
  )
}

export default DropDown


