import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilyService from '@modules/appointments/services/ListProviderMonthAvailabilyService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const listProviderMonthAvailabily = container.resolve(
      ListProviderMonthAvailabilyService,
    );

    const availability = await listProviderMonthAvailabily.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });
    return response.json(availability);
  }
}
