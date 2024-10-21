const staticAssetServerUrl =
  'https://7072-prod-9goxmz5w39f71724-1308749526.tcb.qcloud.la/';

export async function getStaticAssetServerUrl() {
  const domain = window.location.href;
  if (domain.includes('github') || domain.includes('http://')) {
    return domain;
  }
  return staticAssetServerUrl;
}

export const MPNameMap: Record<string, string | undefined> = {
  root: 'ROOT',
  motherboard_mp: 'Motherboard',
  power_mp: 'PowerSupply',
  fan1_mp: 'Fan1',
  fan2_mp: 'Fan2',
  fan3_mp: 'Fan3',
  fan4_mp: 'Fan4',
  fan5_mp: 'Fan5',
  nvmessd_mp1: 'NVMESSD1',
  nvmessd_mp2: 'NVMESSD2',
  cooler_mp: 'Cooler',
  cpu_mp: 'CPU',
  pcie_mp: 'GPU',
  ddr4_ram_mp1: 'DDR4 RAM1',
  ddr4_ram_mp2: 'DDR4 RAM2',
};
