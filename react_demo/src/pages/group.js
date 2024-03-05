import React from "react";
import GroupA from "../components/group-components/groupA";
import GroupB from "../components/group-components/groupB";
import GroupC from "../components/group-components/groupC";
import GroupD from "../components/group-components/groupD";
import GroupE from "../components/group-components/groupE";
import GroupF from "../components/group-components/groupF";
import GroupG from "../components/group-components/groupG";
import GroupH from "../components/group-components/groupH";


export default function Group() {
  return (
    <div className="h-[82vh] bg-contain w-full flex flex-row flex-wrap justify-center gap-12" id="Gruppe">
      <GroupA />
      <GroupB />
      <GroupC />
      <GroupD />
      <div class="col-span-4 flex justify-center items-center gap-12">
      <GroupE />
      <GroupF />
      <GroupG />
      <GroupH />
      </div>
    </div>
  );
}
