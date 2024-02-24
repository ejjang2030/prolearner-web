import defaultSettings from "@config/settings";
/** user's device */
enum DeviceList {
  /** telephone */
  MOBILE = 'MOBILE',
  /** computer */
  DESKTOP = 'DESKTOP'
}

export type Device = keyof typeof DeviceList;


export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const collapsed = device !== 'DESKTOP';
  const settings = {...defaultSettings};
  return {
    device,
    collapsed,
    settings,
  } as const;
}