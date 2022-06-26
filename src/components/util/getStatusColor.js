/* eslint-disable import/no-anonymous-default-export */

  export default (status) => {
    switch (status) {
      case "paid":
        return `custom-ligth-green-100`
      case "pending":
        return `custom-orange`
      case "draft": 
        return `custom-ligth-gray-100`
      default:
        break;
    }
  }



