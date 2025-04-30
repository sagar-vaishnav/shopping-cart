import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {    
    useTitle("Home");    
    const products = [
        { 
            "id": 100001,
            "name": "Sony Wh-Ch510 Bluetooth Wireless",
            "image": "/assets/1001.png",
            "price": 149, 
            "in_stock": true
        },
        { 
            "id": 100002,
            "name": "boAt Rockerz 450",
            "image": "/assets/1002.png",
            "price": 49, 
            "in_stock": false
        },
        { 
            "id": 100003,
            "name": "JBL Tune 760N",
            "image": "/assets/1003.png",
            "price": 179, 
            "in_stock": true
        },
        { 
            "id": 100004,
            "name": "Logitech H111 Wired",
            "image": "/assets/1004.png",
            "price": 39, 
            "in_stock": false
        },
        { 
            "id": 100005,
            "name": "APPLE Airpods Max Bluetooth Headset",
            "image": "/assets/1005.png",
            "price": 199, 
            "in_stock": false
        },
        { 
            "id": 100006,
            "name": "ZEBRONICS Zeb-Thunder Wired",
            "image": "/assets/1006.png",
            "price": 29, 
            "in_stock": true
        } 
    ];
  return (
    <main className="flex flex-wrap justify-center items-center p-4">               
    {
        products.map((product) => (
            <Card key={product.id} product={product} />
        ))
    }
    </main>
    
  )
}
