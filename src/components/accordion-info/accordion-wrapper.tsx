"use client";
import dynamic from "next/dynamic";
import AccordionSkeleton from "./accordion-info-skeleton";

const Accordion = dynamic(() => import("./accordion-info"), {
  ssr: false,
  loading: () => <AccordionSkeleton />,
});

export default function AccordionWrapper() {
  return <Accordion />;
}
