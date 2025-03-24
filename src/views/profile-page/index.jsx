import { HeroProfile } from './hero-profile';
import { TabsMenu } from './tabs-menu';

const ProfileView = () => {
  return (
    <div className='w-full'>
      <HeroProfile />

      <div className='w-full  mt-4'>
        <TabsMenu />
      </div>
    </div>
  );
};

export default ProfileView;
