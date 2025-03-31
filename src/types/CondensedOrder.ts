/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
export type CondensedOrder = {
  priceInTicks: beet.bignum;
  sizeInBaseLots: beet.bignum;
  lastValidSlot: beet.COption<beet.bignum>;
  lastValidUnixTimestampInSeconds: beet.COption<beet.bignum>;
};

/**
 * @category userTypes
 * @category generated
 */
export const condensedOrderBeet =
  new beet.FixableBeetArgsStruct<CondensedOrder>(
    [
      ["priceInTicks", beet.u64],
      ["sizeInBaseLots", beet.u64],
      ["lastValidSlot", beet.coption(beet.u64)],
      ["lastValidUnixTimestampInSeconds", beet.coption(beet.u64)],
    ],
    "CondensedOrder"
  );
