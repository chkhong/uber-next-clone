import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import RideSelector from "../components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiY2hraG9uZyIsImEiOiJja3dhNHp3ajcweWZmMzBxbWpwbmJmbHh0In0.OoKdEF30HkGYNoxYCT15wg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiY2hraG9uZyIsImEiOiJja3dhNHp3ajcweWZmMzBxbWpwbmJmbHh0In0.OoKdEF30HkGYNoxYCT15wg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonSelector>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonSelector>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ButtonContainer = tw.div`
  absolute z-10 bg-white rounded-full p-1 m-2
`;

const BackButton = tw.img`
  h-8
`;

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`;

const ConfirmButtonSelector = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
  bg-black text-white m-4 py-4 text-center text-xl
`;
