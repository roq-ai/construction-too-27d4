import { ToolInterface } from 'interfaces/tool';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  location: string;
  inventory_count: number;
  opening_hours: string;
  closing_hours: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  tool?: ToolInterface[];
  organization?: OrganizationInterface;
  _count?: {
    tool?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  organization_id?: string;
}
