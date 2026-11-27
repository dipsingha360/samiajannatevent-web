import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceData } from "../../data/services";

const findService = (id) => serviceData.find((data) => String(data.id) === id);

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceData.map((data) => ({ service: String(data.id) }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const item = findService(service);
  if (!item) return {};

  return {
    title: item.serviceTitle,
    description: item.serviceSubtitle,
    alternates: { canonical: `/services/${item.id}` },
    openGraph: {
      title: item.serviceTitle,
      description: item.serviceSubtitle,
      images: [item.serviceImg2],
    },
  };
}

async function Service({ params }) {
  const { service } = await params;
  const item = findService(service);
  if (!item) notFound();

  return (
    <div className="mt-28 mb-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-yellow-500 lg:text-6xl text-4xl font-medium">
          {item.serviceTitle}
        </h1>
        <p className="py-5 font-light text-slate-400">{item.serviceTag}</p>
        <Image
          src={item.serviceImg2}
          alt={item.serviceTitle}
          width={800}
          height={400}
          sizes="(max-width: 800px) 100vw, 800px"
          fetchPriority="high"
          className={`img w-[800px] h-[400px] p-3 rounded-3xl object-cover`}
        />
        <p className="py-5 text-center w-[400px] md:w-[700px] lg:w-[800px] px-4">
          {item.serviceDetails}
        </p>
        <div className="service-points pb-10 text-lg text-yellow-500">
          <p>{item.point1}</p>
          <p>{item.point2}</p>
          <p>{item.point3}</p>
          <p>{item.point4}</p>
          <p>{item.point5}</p>
          <p>{item.point6}</p>
          <p>{item.point7}</p>
          <p>{item.point8}</p>
          <p>{item.point9}</p>
          <p>{item.point10}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
