import { faArrowDown, faCloudArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const metricsMap = {
  _mktp: {
    num: "23793",
    fmt: "23.8k",
    title: "Installs",
    color: "text-sky-400",
    link: "Try it out",
    href: "https://marketplace.visualstudio.com/items?itemName=stateful.runme",
    icon: <FontAwesomeIcon icon={faCloudArrowDown} size="xl" />,
  },
  _openvsx: {
    num: "17231",
    fmt: "17.2k",
    title: "Installs",
    color: "text-sky-400",
    link: "Try it out",
    href: "https://open-vsx.org/extension/stateful/runme",
    icon: <FontAwesomeIcon icon={faCloudArrowDown} size="xl" />,
  },
  installs: {
    num: "43271",
    fmt: "43.7k",
    title: "Installs",
    color: "text-sky-400",
    link: "Try it out",
    href: "https://marketplace.visualstudio.com/items?itemName=stateful.runme",
    icon: <FontAwesomeIcon icon={faCloudArrowDown} size="xl" />,
  },
  stars: {
    num: "955",
    fmt: "955",
    title: "GitHub Stars",
    color: "text-yellow-300",
    link: "Go to GitHub",
    href: "https://github.com/stateful/runme",
    icon: <FontAwesomeIcon icon={faStar} size="xl" />,
  },
  discord: {
    num: "700+",
    fmt: "700+",
    title: "Discord Users",
    color: "text-[#7289da]",
    link: "Join Discord",
    href: "https://discord.gg/runme",
    icon: <FontAwesomeIcon icon={faDiscord} size="xl" />,
  },
};

async function getRunmeTotals() {
  const next = { revalidate: 5 * 60 }; // bust cache after 5min
  const res = await fetch("https://sourishkrout-runmetotals.web.val.run/", {
    next,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getMetrics() {
  // fetch in parallel and don't panic
  await getRunmeTotals()
    .then((resp) => {
      const { stars, mktp, ovsx } = resp.data;
      metricsMap.stars.num = Math.max(stars, metricsMap.stars.num);
      metricsMap.stars.fmt = fmtNumber(metricsMap.stars.num);

      metricsMap._mktp.num = Math.max(mktp, metricsMap._mktp.num);
      metricsMap._mktp.fmt = fmtNumber(metricsMap._mktp.num);

      metricsMap._openvsx.num = Math.max(ovsx, metricsMap._openvsx.num);
      metricsMap._openvsx.fmt = fmtNumber(metricsMap._openvsx.num);
    })
    .catch((e) => console.error(e));

  // global state is dangerous
  const total = Number(metricsMap._mktp.num).valueOf() + Number(metricsMap._openvsx.num).valueOf();
  metricsMap.installs.num = total;
  metricsMap.installs.fmt = fmtNumber(total);

  return metricsMap;
}

function fmtNumber(num) {
  return `${Math.round(num / 100) / 10}k`;
}

const MetricEntry = ({ title, children }) => {
  return (
    <div className="flex flex-col font-normal text-center font-plex">
      <div className="text-[54px]">{title}</div>
      <div className="text-[18px] flex flex-row space-x-2 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const Metrics = async () => {
  const metricsMap = await getMetrics();

  return (
    <div className="max-w-3xl pt-8 mx-auto w-full">
      <div className="flex flex-col justify-around space-y-6 md:space-y-0 md:flex-row">
        <MetricEntry title={metricsMap.installs.fmt}>
          <FontAwesomeIcon icon={faArrowDown} className="h-[20px] w-[20px]" />
          <div>Installs</div>
        </MetricEntry>
        <MetricEntry title={metricsMap.stars.fmt}>
          <FontAwesomeIcon icon={faStar} className="h-[20px] w-[20px]" />
          <div>Github stars</div>
        </MetricEntry>
        <MetricEntry title="700+">
          <FontAwesomeIcon icon={faDiscord} className="h-[20px] w-[20px]" />
          <div>Discord users</div>
        </MetricEntry>
      </div>
    </div>
  );
};

export default Metrics;
