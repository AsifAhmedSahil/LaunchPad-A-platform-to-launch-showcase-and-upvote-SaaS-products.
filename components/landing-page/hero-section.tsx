import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparkleIcon,
  UsersIcon,
} from "lucide-react";
import StadCard from "./stat-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2 ">
        <span className="absolute h-full w-full animate-ping bg-primary rounded-full opacity-75"></span>
        <span className="relative h-2 w-2 rounded-full bg-primary inline-flex"></span>
      </span>
      <span className="text-muted-foreground">
        Join • Launch • Discover • Upvote
      </span>
    </Badge>
  );
};

const statsData = [
  {
    icon: RocketIcon,
    value: "2.5K+",
    label: "Projects Shared",
  },
  {
    icon: UsersIcon,
    value: "10K+",
    label: "Active Creators",
    hasBorder: true,
  },
  {
    icon: EyeIcon,
    value: "50K+",
    label: "Monthly Visitors",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
          <LiveBadge />

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Launch your product. <br />
            Find the next big thing.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            LaunchPad helps founders launch, showcase, and promote their SaaS
            products with community-driven upvotes.
          </p>

          <div className="mb-16 flex flex-col sm:flex-row gap-4">
            <Button asChild className="text-base px-8 shadow-lg rounded-lg">
              <Link href="/submit">
                <SparkleIcon size={5} />
                Share Your Product
              </Link>
            </Button>
            <Button
              asChild
              className="text-base px-8 shadow-lg rounded-lg"
              variant="secondary"
            >
              <Link href="/explore">
                Explore Product <ArrowRightIcon size={5} />
              </Link>
            </Button>
          </div>

          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 ">
            {statsData.map((stat) => (
              <StadCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
