'use client';

import React, { Dispatch, SetStateAction, useCallback } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Country } from '@/types/location';
import useSWR from 'swr';
import { fetcher, getSecureId } from '@/lib/utils';
import Image from 'next/image';

type CountrySelectProps = {
    country: Country | null,
    setCountry: (country: Country) => void
}

export function SelectCountry({ country, setCountry }: CountrySelectProps) {
  const { data: countries } = useSWR('/api/locations/countries', fetcher);

  const selectCountry = useCallback((ctr: string) => {
    setCountry(JSON.parse(ctr) as Country);
  }, [setCountry]);

  return (
    <Select
      onValueChange={(val) => selectCountry(val)}
      value={JSON.stringify(country) ?? ''}
    >
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {(countries?.items ?? []).map((loc: Country) => (
            <SelectItem key={loc.id} value={JSON.stringify(loc)}>
              <div className="flex gap-2 items-center">
                <Image
                  loading="lazy"
                  key={getSecureId()}
                  alt={`flag-${loc.id}`}
                  width={16}
                  height={16}
                  src={`https://flagsapi.com/${loc.countryCode}/shiny/16.png`}
                />
                {loc.name}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
