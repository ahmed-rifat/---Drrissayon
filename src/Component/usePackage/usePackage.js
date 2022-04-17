import { useEffect, useState } from "react"

const usePackage=()=>{
    const [packagesItem, setPackagesItem]= useState([]);
    useEffect(()=>{
        fetch('packages.json')
        .then(res=>res.json())
        .then(data=> setPackagesItem(data));
    },[]);

    return [packagesItem, setPackagesItem];
}

   export default usePackage;