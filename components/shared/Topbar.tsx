import { OrganizationSwitcher, SignedIn, SignedOut, SignOutButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar flex justify-between items-center p-4 bg-dark-1 text-white">
      {/* Logo and App Name */}
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-4">
        {/* Signed-In Actions */}
        <SignedIn>
          {/* Logout Button */}
          <div className="block md:hidden">
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </div>

          {/* Organization Switcher */}
          <OrganizationSwitcher
            appearance={{
              baseTheme: dark,
              elements: {
                organizationSwitcherTrigger: "py-2 px-4",
              },
            }}
          />
        </SignedIn>

        {/* Signed-Out Actions */}
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignInButton mode="modal">
              <button className="btn btn-primary bg-primary-500 p-2 rounded-md text-white">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="btn bg-primary-500 p-2 rounded-md text-white">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Topbar;
