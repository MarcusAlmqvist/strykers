import Image from "next/image";

async function Avatar({
  profileImage,
  userName,
}: Readonly<{
  profileImage?: string | null;
  userName?: string | null;
}>) {
  return (
    <div className="flex flex-row items-center gap-4">
      {profileImage && (
        <Image
          src={profileImage}
          alt="Profile picture"
          width={48}
          height={48}
          className="rounded-full"
        />
      )}
      {userName && (
        <p className="text-center ">
          <span>{userName}</span>
        </p>
      )}
    </div>
  );
}

export default Avatar;
