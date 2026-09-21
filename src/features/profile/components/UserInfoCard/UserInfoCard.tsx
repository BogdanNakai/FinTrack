import ButtonChanges from "@/components/buttons/ButtonChanges";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import type { IUser } from "@/types/user.types";

const UserInfo = () => {
  const users = getStorage<IUser[]>(STORAGE_KEYS.USERS, []);
  const activeUserId = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
  const activeUser = users.find((user) => user.id === activeUserId);

  return (
    <>
      <div className="flex flex-col items-center max-w-[400px] gap-[24px] px-[39px] py-[20px] shadow-[0_6px_18px_0_rgba(2,6,23,0.1)] rounded-[12px]">
        <div className="flex flex-col items-center gap-[20px]">
          <div className="rounded-[50%] overflow-hidden">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="#00b894"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="32" fill="#00b894" />
              <defs>
                <pattern
                  id="pattern0_2080_1299"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use transform="scale(0.00390625)" />
                </pattern>
                <image
                  id="image0_2080_1299"
                  width="256"
                  height="256"
                  preserveAspectRatio="none"
                />
              </defs>
            </svg>
          </div>
          <p className="text-[18px] text-[#1E293B] tracking-[0.02em]">
            {activeUser?.name ?? "User"}
          </p>
          <p className="text-[14px] text-[#64748B] tracking-[0.02em]">
            {activeUser?.email ?? "No email available"}
          </p>
        </div>
        <div className="flex items-center gap-[12px] flex-wrap justify-center">
          <ButtonPrimary type="button" textButton={"Edit Profile"} />
          <ButtonChanges type="button" textButton="Change Password" />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
