import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/carbon/select";
import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { Button } from "@/registry/carbon/button/button";
import { ExampleForm } from "@/registry/carbon/example-form/example-form";
import PokemonPage from "@/registry/carbon/complex-component/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/carbon/accordion";
import CodeSnipped from "@/registry/carbon/code-snipped";
import { TooltipProvider } from "@/registry/carbon/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/carbon/modal";
import { Input } from "@/registry/carbon/input";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.
//
export default function Home() {
  return (
    <TooltipProvider>
      <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Void UI</h1>
          <p className="text-muted-foreground">
            A custom registry for distributing code using shadcn.
          </p>
        </header>
        <main className="flex flex-col flex-1 gap-8">
          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                Button component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Button size="2xl">Primary</Button>
              <Button variant="tertiary" size="2xl">
                Tertiary
              </Button>
              <Button size="2xl" variant="destructive">
                Primary
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <CodeSnipped
                label="Copy to clipboard"
                labelSide="bottom"
                type="singleline"
              >
                yarn add carbon-components@latest yarn add
                carbon-components@latest
              </CodeSnipped>
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Input className="max-w-md" placeholder="Placeholder" />
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                A simple tooltip component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <Button variant="dark">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:w-[625px]">
                    <DialogHeader>
                      <DialogDescription>Optional label</DialogDescription>
                      <DialogTitle>Add a custom domain</DialogTitle>
                    </DialogHeader>
                    <div>
                      <p className="text-[14px]">
                        Custom domains direct requests for your apps in this
                        Cloud Foundry organization to a URL that you own. A
                        custom domain can be a shared domain, a shared
                        subdomain, or a shared domain and host.
                      </p>
                      <Input
                        variant="white"
                        className="mt-7"
                        placeholder="Placeholder"
                      />
                      <Select>
                        <SelectTrigger color="white" className="w-full mt-6">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className="w-full" variant="dark">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button className="w-full" type="submit">
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                A simple accordion component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Information</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Return Policy</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                Select component
              </h2>
              <OpenInV0Button name="Select" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple1">Pineapple</SelectItem>
                    <SelectItem value="pineapple2">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                A contact form with Zod validation.
              </h2>
              <OpenInV0Button name="example-form" className="w-fit" />
            </div>
            <div className="flex items-center justify-center min-h-[500px] relative">
              <ExampleForm />
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground sm:pl-3">
                A complex component showing hooks, libs and components.
              </h2>
              <OpenInV0Button name="complex-component" className="w-fit" />
            </div>
            <div className="flex items-center justify-center min-h-[400px] relative">
              <PokemonPage />
            </div>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
