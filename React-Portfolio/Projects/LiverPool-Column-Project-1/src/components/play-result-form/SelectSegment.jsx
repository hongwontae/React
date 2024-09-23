/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SelectSegment = function SelectSegment({ setSelectedData, selectedData }) {
  return (
    <>
      <div className="flex gap-2">
        <label htmlFor="match_team">Match Team</label>
        <select
            value={selectedData}
          className="text-black p-1 rounded-sm text-center"
          id="match_team"
          onChange={(e) => {
            return setSelectedData(e.target.value);
          }}
        >
          <option value="맨체스터 시티">Manchester City FC</option>
          <option value="맨유">Manchester United FC</option>
          <option value="아스날">Arsenal FC</option>
          <option value="첼시">Chelsea FC</option>
          <option value="토트넘">Tottenham Hotspur FC</option>
          <option value="뉴캐슬">Newcastle United FC</option>
          <option value="아스톤 빌라">Aston Villa FC</option>
          <option value="크리스탈 팰리스">Crystal Palace FC</option>
          <option value="웨스트햄">West Ham United FC</option>
          <option value="레스터 시티">Leicester City FC</option>
          <option value="브라이튼 앤 호브 앨비언">
            Brighton & Hove Albion FC
          </option>
          <option value="노팅엄 포레스트">Nottingham Forest FC</option>
          <option value="본머스">AFC Bournemouth</option>
          <option value="브렌트포드">Brentford FC</option>
          <option value="사우샘프턴">Southampton FC</option>
          <option value="에버턴">Everton FC</option>
          <option value="울버햄튼">Wolverhampton Wanderers FC</option>
          <option value="입스위치">Ipswich Town FC</option>
          <option value="풀럼">Fulham FC</option>
        </select>
      </div>
    </>
  );
};

export default SelectSegment;
