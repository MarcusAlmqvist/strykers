function Hero({ title = "MINA STRYK", description = "" }) {
  return (
    <div className="w-full bg-secondary px-6 text-left">
      <h1 className="text-5xl tracking-tight sm:text-[5rem]">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export default Hero;
