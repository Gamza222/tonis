export function CutWalletAddress(address: string) {
  const partOne = address.split("").splice(0, 5);
  const partTwo = address.split("").splice(-3, 3);
  return partOne.join("") + "..." + partTwo.join("");
}
