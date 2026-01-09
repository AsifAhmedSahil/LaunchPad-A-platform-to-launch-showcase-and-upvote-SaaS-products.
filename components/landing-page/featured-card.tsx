import React from "react";
import SectionHeader from "../common/section-header";
import { ArrowUpRightIcon, StarsIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/ProductCard";

const FeaturedCard = () => {
    const featuredProducts = [
        {
            id:1,
            name:"ParityKit",
            description:"A toolkit for creating parity",
            tags:["saas","pricing"],
            votes: 615,
            isFeatured: true 
        },
        {
            id:2,
            name:"ParityKit",
            description:"A toolkit for creating parity",
            tags:["saas","pricing"],
            votes: 615,
            isFeatured: false 
        },
        {
            id:3,
            name:"ParityKit",
            description:"A toolkit for creating parity",
            tags:["saas","pricing"],
            votes: 615,
            isFeatured: false 
        },
        {
            id:4,
            name:"ParityKit",
            description:"A toolkit for creating parity",
            tags:["saas","pricing"],
            votes: 615,
            isFeatured: true
        },
    ]
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <SectionHeader
            title="Featured Product"
            icon={StarsIcon}
            description="Top listed product from our community in this week..."
          />
{/* update */}
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link href={"/explore"} >
            View All <ArrowUpRightIcon/>
            </Link>
            </Button>
        </div>

        <div className="grid-wrapper">

            {
                featuredProducts.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))
            }



        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
