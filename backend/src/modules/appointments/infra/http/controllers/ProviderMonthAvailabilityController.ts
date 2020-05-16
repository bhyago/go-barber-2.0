import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilyService from '@modules/appointments/services/ListProviderMonthAvailabilyService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    // const { provider_id } = request.params;
    const { provider_id, month, year } = request.body;

    const listProviderMonthAvailabily = container.resolve(
      ListProviderMonthAvailabilyService,
    );

    const availability = await listProviderMonthAvailabily.execute({
      provider_id,
      month,
      year,
    });
    return response.json(availability);
  }
}
