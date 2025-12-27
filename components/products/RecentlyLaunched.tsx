/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarRangeIcon, RocketIcon } from "lucide-react"
import SectionHeader from "../common/section-header"
import ProductCard from "./ProductCard"
import EmptyStats from "../common/EmptyStats"


const RecentlyLaunched = () => {
    const recentlyLaunchedProducts:any = []
  return (
    <div className="py-20">
        <div className="wrapper">
            <SectionHeader 
            title="Recently Launched"
            description="Discover the latest products from our commuinity"
            icon={RocketIcon}
            />

            {
                recentlyLaunchedProducts.length >0 ? (
                    <div className="grid-wrapper">
                        {
                            recentlyLaunchedProducts.map((product:any)=> (
                                <ProductCard key={product.id} product={product}/>
                            ))
                        }

                    </div>
                ) : (
                    <EmptyStats 
                    message="No Product launched in the last week."
                    icon={CalendarRangeIcon}
                    />
                )
            }

        </div>
        
    </div>
  )
}

export default RecentlyLaunched