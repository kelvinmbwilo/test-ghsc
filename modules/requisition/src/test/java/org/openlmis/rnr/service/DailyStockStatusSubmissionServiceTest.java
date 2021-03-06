/*
 * Electronic Logistics Management Information System (eLMIS) is a supply chain management system for health commodities in a developing country setting.
 *
 * Copyright (C) 2015  John Snow, Inc (JSI). This program was produced for the U.S. Agency for International Development (USAID). It was prepared under the USAID | DELIVER PROJECT, Task Order 4.
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.openlmis.rnr.service;

import org.junit.Test;
import org.junit.experimental.categories.Category;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.openlmis.db.categories.UnitTests;
import org.openlmis.rnr.domain.DailyStockStatus;
import org.openlmis.rnr.repository.DailyStockStatusRepository;

import java.util.Date;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;

@Category(UnitTests.class)
@RunWith(MockitoJUnitRunner.class)
public class DailyStockStatusSubmissionServiceTest {

  @Mock
  DailyStockStatusRepository repository;


  @InjectMocks
  DailyStockStatusSubmissionService service;

  @Test
  public void save() throws Exception {
    DailyStockStatus stockStatus  = new DailyStockStatus();
    stockStatus.setDate(new Date());
    stockStatus.setProgramId(23L);
    stockStatus.setFacilityId(343L);

    doNothing().when(repository).insert(stockStatus);
    doNothing().when(repository).clearStatusForFacilityProgramDate(stockStatus.getFacilityId(), stockStatus.getProgramId(), stockStatus.getDate());

    service.save(stockStatus);

    verify(repository).clearStatusForFacilityProgramDate(stockStatus.getFacilityId(), stockStatus.getProgramId(), stockStatus.getDate());
    verify(repository).insert(stockStatus);
  }

}
