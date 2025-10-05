import React from 'react'
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
import { Button } from '@/registry/carbon/button/button';
import { Input } from '@/registry/carbon/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/carbon/select";

const DialogExample = () => {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button kind="dark">Open Dialog</Button>
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
                <Button className="w-full" kind="dark">
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
  )
}

export default DialogExample
