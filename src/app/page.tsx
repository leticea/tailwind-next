import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import { SettingsTabs } from "@/components/SettingsTabs";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5">
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Leticia" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Nascimento" />
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <InputRoot>
            <InputPrefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="leticia@leticia.com.br"
              />
            </InputRoot>
          </div>
        </form>
      </div>
    </>
  );
}
