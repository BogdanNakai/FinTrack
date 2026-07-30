import ProfileSettingsCard from "@/components/Cart/ProfileSettingsCard/ProfileSettingsCard";
import UserInfo from "@/components/Cart/UserInfo";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-[47px]">
          <div className="profile__container">
            <div>
              <h2 className="font-[Poppins] font-sans text-2xl text-[#1E293B] tracking-[0.02em] font-medium pb-[30px]">
                My Profile
              </h2>
              <div className="flex items-start flex-wrap gap-5 justify-center">
                <UserInfo />
                <ProfileSettingsCard />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Copyright />
    </>
  );
};

export default ProfilePage;
